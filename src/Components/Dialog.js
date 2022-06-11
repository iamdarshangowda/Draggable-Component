import React, { useState, useEffect, useRef } from "react";
import { usePosition } from "./Context/Position";
import "../Styles/Dialog.css";

function Dialog() {
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 50 });
  const [dragEnd, setDragEnd] = useState({ x: 0, y: 50 });

  const {
    positionDispatch,
    positionState: { styles, nameOfPosition },
  } = usePosition();
  const dragDivRef = useRef(null);

  useEffect(() => {
    const onKeyPress = (e) => {
      switch (e.key) {
        case "Escape":
          dragDivRef.current.style.display = "none";
          break;
        case "Enter":
          dragDivRef.current.style.display = "flex";
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", onKeyPress);
    return () => {
      document.removeEventListener("keydown", onKeyPress);
    };
  }, []);

  function handleDragStart(e) {
    setDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  }

  function handleDragging(e) {
    if (!dragging) return;
    let dragDivDetails = e.target.getBoundingClientRect();
    const divPosition = {
      x: dragDivDetails.left + e.clientX - dragStart.x,
      y: dragDivDetails.top + e.clientY - dragStart.y,
    };
    if (
      divPosition.y > 285 ||
      divPosition.y < 55 ||
      divPosition.x + 300 > document.documentElement.clientWidth ||
      divPosition.x < 0
    ) {
      setDragging(false);
      return;
    }
    setDragEnd(divPosition);
  }

  function handleDragEnd() {
    setDragging(false);
    positionDispatch({ type: "DRAG_POSITIONS", payload: dragEnd });
  }

  return (
    <div
      className="drag-box"
      style={styles}
      ref={dragDivRef}
      draggable="true"
      onDragStart={handleDragStart}
      onDrag={handleDragging}
      onDragEnd={handleDragEnd}
    >
      <p className="float-text">
        {nameOfPosition !== "" ? nameOfPosition : "Floating..."}
      </p>
      <p className="drag-text">Drag me around !</p>
    </div>
  );
}

export default Dialog;
