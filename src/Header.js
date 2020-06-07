import React from "react";
import "./App.css";

const Header = () => (
  <nav className="App-nav">
    <h1>
      <a href="index.html">ReactApp</a>
    </h1>
    <ul>
      <a href="index.html">
        <li>Home</li>
      </a>
      <a href="/#">
        <li>About</li>
      </a>
      <a href="/#">
        <li>Contact</li>
      </a>
    </ul>
  </nav>
);

export default Header;
