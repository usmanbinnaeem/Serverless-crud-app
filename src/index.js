import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MediaCard from "./MediaCard";
import Gate from "./Gate";
import Header from "./Header";

ReactDOM.render(
  <div>
    <Header />
    <App name={<strong>Usman</strong>} date={7 + ",June" + 2020} />,
    <MediaCard
      title={"Title in h2 tag"}
      body={"Body in paragrapg tag"}
      image="https://media.istockphoto.com/photos/young-female-programer-working-in-her-office-picture-id625131426"
      width="100px "
      alt="programmer"
    />
    ,
    <Gate isOpen={true} />
  </div>,
  document.getElementById("root")
);
