import React from "react";
import imagem from "../images/icon-star.svg";

function TextContent(props) {
  return (
    <div className="textContent">
      <div className="star-container">
        <img src={imagem} alt="star" />
      </div>
      <h1>How did we do?</h1>
      <p>
        please let us know how we did with your
        <br />
        suport request. All feedback is appreciated
        <br />
        to help us improve our offering!
      </p>
    </div>
  );
}

export default TextContent;
