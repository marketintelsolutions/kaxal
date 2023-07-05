import React from "react";
import Card from "../components/Card";
import { landingCards } from "../utils/data";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-center">
        {landingCards.map((item) => {
          return <Card {...item} />;
        })}
      </div>
    </div>
  );
};

export default Landing;
