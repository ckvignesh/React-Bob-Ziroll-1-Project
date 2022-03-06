import React from "react";

export default function Navbar() {
  return (
    <nav>
      <img
        src={require("../images/logo512.png")}
        alt="react-logo"
        className="react-logo"
      />
      <h3>React Facts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}
