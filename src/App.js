import React from "react";
import "./App.css";

const App = ({ name, date, title, body, image }) => (
  <div id="main-body">
    Hello {name}!<h3>Project Description</h3>
    Here is our requirements That You must Experience with:
    <p>I used arrow function</p>
    <h3>Front End</h3>
    <ul>
      <li>Html, Css, Pure Vanilla Javascript</li>
      <li>Saas/BootStrap</li>
      <li>React</li>
    </ul>
    <h3>Backend</h3>
    <ul>
      <li>node.js</li>
      <li>Express</li>
      <li>MongoDb</li>
      <li>FireBase</li>
    </ul>
    <h3>Some Other Technologies That he must Know</h3>
    <ul>
      <li>CI\CD Modeling</li>
      <li>Version Controll System</li>
      <li>Cloud Computing</li>
    </ul>
    Date posted: ({date})
  </div>
);

export default App;
