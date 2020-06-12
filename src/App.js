import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MediaCard from "./MediaCard";
import Gate from "./Gate";
import Header from "./Header";
import "./App.css";
import Room from "./Room/Room";

const App = ({ name, date, title, body, image }) => (
  <Router>
    <div id="main-body">
      <div className="container">
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <Header />
              <h1>Assignment #4 on About Page</h1>
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
              <hr />
              <MediaCard
                title={"Title in h2 tag"}
                body={"Body in paragrapg tag"}
                image="https://media.istockphoto.com/photos/young-female-programer-working-in-her-office-picture-id625131426"
                width="100px "
                alt="programmer"
              />
              <hr />
              <Gate isOpen={true} />
              Date posted: ({date})
            </React.Fragment>
          )}
        />
        <Route path="/room" component={Room} />
      </div>
    </div>
  </Router>
);

export default App;
