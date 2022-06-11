import React from "react";
import { useNavigate } from "react-router-dom";
import { usePosition } from "../Components/Context/Position";
import "../App.css";

export default function SecondPage() {
  const navigate = useNavigate();
  const { positionDispatch } = usePosition();

  function handleReturn() {
    navigate("/");
    positionDispatch({
      type: "CENTER",
      payload: { border: "3px solid blue" },
    });
  }
  return (
    <div className="page2">
      <h3>SecondPage</h3>
      <div className="about">
        <h2>Hi, I'm Darshan</h2>
        <p>
          A self-taught aspiring Front-End Web Developer with high vision and
          forward thinking. Committed to learning and self-development to
          achieve better results. Proficient with HTML, CSS and JavaScript.
          Always open to constructive feedback. Effective Problem-Solving skills
          with ability to work as an individual or in a team environment
        </p>
      </div>
      <button className="btnp2" onClick={handleReturn}>
        Go Back
      </button>
    </div>
  );
}
