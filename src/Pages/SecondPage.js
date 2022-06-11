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
      <h3>Second Page</h3>
      <div className="about-container">
        <h2 className="fname">Hi, I'm Darshan</h2>
        <p className="about-me">
          A Self-taught aspiring Front-End Web Developer with high vision and
          forward thinking. Committed to learning and self-development to
          achieve better results. Proficient with <span>HTML</span>,{" "}
          <span>CSS</span>, <span>JavaScript</span> and <span>ReactJs</span>.
          Always open to constructive feedback. Effective Problem-Solving skills
          with ability to work as an individual or in a team environment.
        </p>
        <p className="git">
          Checkout my other
          <a href="https://github.com/iamdarshangowda" target="_blank">
            {" "}
            Projects
          </a>
        </p>
      </div>
      <button className="btnp2" onClick={handleReturn}>
        Go Back
      </button>
    </div>
  );
}
