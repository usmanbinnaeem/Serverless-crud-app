import React, { useState } from "react";
import Header from "../Header";
import "./Room.css";

const Room = () => {
  let [isLit, setLit] = useState(true);
  let [Temp, setTemp] = useState(72);
  return (
    <div id="aboutBody" className={`room ${isLit ? "lit" : "dark"}`}>
      <Header />
      <h1>Function Hooks</h1>
      <h3>The Room is {isLit ? "lit" : "dark"}</h3>

      <button onClick={() => setLit(true)}>Light ON</button>
      {"          "}
      <button onClick={() => setLit(false)}>Light OFF</button>
      <br />
      <br />
      <hr />
      <br />
      <h3>The teperature is {Temp}</h3>
      <button onClick={() => setTemp(Temp++)}>Increase Temperature</button>
      {"          "}
      <button onClick={() => setTemp(Temp--)}>Decrease Temperature</button>
    </div>
  );
};

export default Room;
