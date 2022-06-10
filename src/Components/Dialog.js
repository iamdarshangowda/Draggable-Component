import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
import "../Styles/Dialog.css";

function Dialog() {
  const [direction, setDirection] = useState({
    diffX: 0,
    diffY: 0,
    dragging: false,
    styles: {
      left: "",
      top: "",
    },
  });

  function handleDragStart(e) {
    setDirection((prevDirection) => ({
      ...prevDirection,
      diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
      diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
      dragging: true,
    }));
    e.stopPropagation();
    e.preventDefault();
  }

  let left;
  let top;

  function handleDragging(e) {
    if (direction.dragging) {
      left = e.screenX - direction.diffX;
      top = e.screenY - direction.diffY;

      setDirection((prevDirection) => ({
        ...prevDirection,
        styles: {
          left: left,
          top: top,
        },
      }));
    }
    e.stopPropagation();
    e.preventDefault();
  }

  function handleDragEnd(e) {
    setDirection((prevDirection) => ({
      ...prevDirection,
      dragging: false,
    }));
    e.stopPropagation();
    e.preventDefault();
  }

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        setDirection((prev) => ({
          ...prev,
          display: "block",
        }));
      }
      if (e.key === "Escape") {
        setDirection((prev) => ({
          ...prev,
          display: "none",
        }));
      }
    });
  }, [direction]);

  return (
    <div
      className="drag-box"
      style={direction.styles}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragging}
      onMouseUp={handleDragEnd}
    >
      <h2 className="float-text">Floating...</h2>
      <h2 className="drag-text">Drag me Around...</h2>
    </div>
  );
}

export default Dialog;
