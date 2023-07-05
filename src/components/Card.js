import React from "react";

const Card = ({ img, heading, text, background }) => {
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
          <button>click here</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
