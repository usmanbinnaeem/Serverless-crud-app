import React from "react";
import "./App.css";

const MediaCard = ({ title, body, image }) => (
  <div>
    <h2>MediaCard Task:</h2>
    <h2>{title}</h2>
    <p>{body}</p>

    <img src={image} alt="programmer" />
  </div>
);

export default MediaCard;
