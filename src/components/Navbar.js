import React from "react";

export default function Navbar() {
  return (
    <nav className="nav--main">
      <img
        src={require("../images/logo512.png")}
        alt="react-logo"
        className="nav--logo"
      />
      <h3 className="nav--logo_text">React Facts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
