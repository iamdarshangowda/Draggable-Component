import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import { BsArrowRightSquareFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer">
      <Link className="link" to="./SecondPage">
        Go to Page 2
        <BsArrowRightSquareFill
          style={{ marginLeft: "15px", display: "inline-block" }}
        />
      </Link>
    </footer>
  );
}
