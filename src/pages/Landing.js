import React from "react";
import Card from "../components/Card";
import { landingCards } from "../utils/data";
import { hawareelogo, webzenlogo } from "../assets/logos";
import { Link } from "react-router-dom";
import Carouselslider from "../components/Carousel";

const Landing = () => {

  return (
    <div className="landing">
      <Carouselslider />

      <div className="history">
        <h1><span>At </span>a Glance</h1>
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

      <div className="landing_about">
        <h1><span>Who </span>We Are</h1>
        <h2
          className="sub-heading">As a parent
          company, we oversee two subsidiaries, each vital in our mission to drive sustainable investments and
          create value for our stakeholders.</h2>
        <div className="box">
          <div className="box-center">
            <div className="box-center-item">
              <div className="image"><img src={webzenlogo} alt="webzen logo" /></div>
              <div className="right">
                <div className="heading">
                  <h2>Webzen Agro Allied Services Limited</h2>
                </div>
                <p>Webzen Agro Allied Services Limited provides investment <br /> and
                  business support services to agric businesses
                </p>
              </div>
            </div>
            <span className="division"></span>
            <div className="box-center-item">
              <div className="image"><img src={hawareelogo} alt="webzen logo" /></div>
              <div className="right">
                <div className="heading hawaree-heading">
                  <h2>Hawaree Africa Limited</h2>
                </div>
                <p>Hawaree Africa Limited offers consumer goods distribution and  <br />
                  e-commerce services.
                </p>
              </div>
            </div>
          </div>
        </div>



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
