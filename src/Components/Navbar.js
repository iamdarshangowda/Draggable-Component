import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import Clock from "./Clock";
import Dialog from "./Dialog";

function Navbar() {
  const [viewCenter, setViewCenter] = useState(false);
  const [viewLowerRight, setviewLowerRight] = useState(false);

  const bothChecked = viewCenter || viewLowerRight ? true : false;

  function handleCenter() {
    setViewCenter((prev) => !prev);
    if (viewLowerRight) {
      setviewLowerRight(false);
    }
  }

  function handleLowerRight() {
    setviewLowerRight((prev) => !prev);
    if (viewCenter) {
      setViewCenter(false);
    }
  }

  return (
    <div>
      <div className="nav-container">
        <section className="radio">
          <h3 className="position">Position:</h3>
          <input
            type="radio"
            name="center"
            id="center"
            className="radio-btn"
            checked={viewCenter}
            onClick={handleCenter}
          />
          <label htmlFor="center" className="label">
            Center
          </label>
          <input
            type="radio"
            name="lower-right"
            id="lower-right"
            className="radio-btn"
            checked={viewLowerRight}
            onClick={handleLowerRight}
          />
          <label htmlFor="lower-right" className="label">
            Lower Right
          </label>
        </section>
        <p styles={{ padding: "5px" }}>
          Press Esc key to hide the window, Enter to show again
        </p>
        <Clock />
      </div>
      <Dialog />
    </div>
  );
}

export default Navbar;
