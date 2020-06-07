import React from "react";

// Gate Assignment

const Gate = ({ isOpen }) => (
  <div>
    <h4>Gate Task :</h4>
    The Gate is{" "}
    <strong style={{ color: "darkgreen" }}>
      {isOpen === true ? "Open" : "Closed"}
    </strong>
  </div>
);

export default Gate;
