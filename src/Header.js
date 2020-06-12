import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Header = () => (
  <nav className="App-nav">
    <h1>
      <Link to="/">ReactApp</Link>
    </h1>
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/room">
        <li>About</li>
      </Link>
    </ul>
  </nav>
);

export default Header;
