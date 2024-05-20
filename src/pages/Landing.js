import React from "react";
import Card from "../components/Card";
import { landingCards } from "../utils/data";
import banner from '../assets/images/homebanner.png'

const Landing = () => {

  return (
    <div className="landing">
      <div className="banner" style={{ backgroundImage: `url(${banner})` }} >
        <div className="banner_center">
          <h1>Driving sustainable investments and creating value</h1>
          <p>Kaxal Africa Limited is a member of the Pan African Capital Holdings group, committed to significantly
            impacting the African continent's agribusiness and consumer goods distribution sectors.</p>
        </div>
      </div>
      <div className="landing-center">
        {landingCards.map((item, index) => {
          return <Card {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Landing;
