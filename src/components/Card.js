import React, { useState } from "react";

const Card = ({ img, heading, text, background, url, overlay }) => {
  const [isOverlay, setIsOverlay] = useState(false)

  return (
    <div className="landing-card">
      <div className={isOverlay ? "image overlay" : "image"}
        onMouseOver={() => setIsOverlay(true)}
        onMouseLeave={() => setIsOverlay(false)}
      >
        <div className="img-overlay">
          <img src={overlay} alt="overlay" />
        </div>
        <img src={img} alt={heading} className='main-img' />
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
