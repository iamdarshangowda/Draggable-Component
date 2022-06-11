import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Link className="link" to="./SecondPage">
        About Me
      </Link>
    </footer>
  );
}
