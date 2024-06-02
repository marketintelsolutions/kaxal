import React from "react";
import Card from "../components/Card";
import { landingCards } from "../utils/data";
import { Link } from "react-router-dom";
import Carouselslider from "../components/Carousel";
import hero from '../assets/images/hero.jpg'

const Landing = () => {

  return (
    <div className="landing">
      <Carouselslider />

      <div className="history">
        <h1><span>At </span>a Glance</h1>
        <div className="hero">

          <div className="hero_text">
            <p
              className="sub-heading">Kaxal is a fusion and medly of our passions - Agriculture & E-Commerce. Kaxal Africa Limited has
              a rich history, starting as Webzen Agro Allied Services Limited
            </p>
            <p>
              Webzen started off with investments in the agribusiness space and; arising from business
              dynamics; saw the need to invest into the distribution and marketing of the finished products of
              investee firms at inception, which was later extended to that of partner agribusiness firms.
            </p>
            <p>
              Within a short time; the business activities being generated on the agri-products distribution and
              marketing arm necessitated the need to on-board other high quality consumer goods outside of
              the agri-space towards providing a one-stop-store for consumers.
            </p>
            <p>
              The business decision to extend into offering distribution services laid the foundation for the
              formation of Kaxal Africa Limited as a parent (umbrella) company to oversee the 2 arms of the
              business (i.e agribusiness investment and consumer goods distribution).
            </p>
          </div>
          <div className="hero_image">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>

      <div className="landing_about">
        <h1><span>Who </span>We Are</h1>
        <h2
          className="sub-heading">As a parent
          company, we oversee two subsidiaries, each vital in our mission to drive sustainable investments and
          create value for our stakeholders.</h2>




        {/* <h3>Kaxal is a fusion and medly of our passions - Agriculture & E-Commerce. Kaxal Africa Limited has
          a rich history, starting as Webzen Agro Allied Services Limited</h3>
        <h3>Webzen started off with investments in the agribusiness space and; arising from business
          dynamics; saw the need to invest into the distribution and marketing of the finished products of
          investee firms at inception, which was later extended to that of partner agribusiness firms.</h3> */}
        <div className="landing-center">
          {landingCards.map((item, index) => {
            return <Card {...item} key={index} />;
          })}
        </div>
        <Link className="learn-more" to='/about'>Learn More</Link>
      </div>
    </div>
  );
};

export default Landing;
