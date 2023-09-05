import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, heading, text, background, url }) => {
  return (
    <div className="landing-card">
      <div className="image">
        <img src={img} alt={heading} />
      </div>
      <div
        className="info-container"
        style={{ backgroundColor: `${background}` }}
      >
        <div className="info">
          <h2>{heading}</h2>
          <p>{text}</p>
          <a href={url} target='_blank'>click here</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
