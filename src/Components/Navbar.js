import React from "react";
import "../Styles/Navbar.css";
import Clock from "./Clock";
import { usePosition } from "./Context/Position";

function Navbar() {
  const {
    positionPost,
    positionState: { nameOfPosition },
  } = usePosition();
  const handlePosition = (e) => {
    positionPost({ type: e.target.value });
  };

  return (
    <div>
      <div className="nav-container">
        <section className="radio">
          <h3 className="position">Position:</h3>
          <input
            type="radio"
            name="selector"
            id="center"
            className="radio-btn"
            value="CENTER"
            checked={nameOfPosition === "Center"}
            onChange={handlePosition}
          />
          <label htmlFor="center" className="label">
            Center
          </label>
          <input
            type="radio"
            name="selector"
            id="lower-right"
            className="radio-btn"
            value="LOWER_RIGHT"
            checked={nameOfPosition === "Lower Right"}
            onChange={handlePosition}
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
    </div>
  );
}

export default Navbar;
