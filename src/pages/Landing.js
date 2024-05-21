import React from "react";
import Card from "../components/Card";
import { landingCards } from "../utils/data";
import banner from '../assets/images/homebanner.png'
import banner2 from '../assets/images/banner2.png'
import banner3 from '../assets/images/banner3.png'
import bulb from '../assets/images/bulb.png'
import chart from '../assets/images/chart.png'
import think from '../assets/images/think.png'
import chain from '../assets/images/chain.png'
import { Link } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";

const Landing = () => {

  return (
    <div className="landing">
      <Carousel
        className="mt-8"
        autoplay
        loop
        autoplayDelay={5000}
      >
        {/* item 1 */}
        <div className="banner" style={{ backgroundImage: `url(${banner})` }} >
          <div className="banner_center">
            <h1>Driving sustainable investments and creating value</h1>
            <p>Kaxal Africa Limited is a member of the Pan African Capital Holdings group, committed to significantly
              impacting the African continent's agribusiness and consumer goods distribution sectors.</p>
          </div>

        </div>
        {/* item 2 */}
        <div className="banner" style={{ backgroundImage: `url(${banner2})` }} >
          <div className="banner_center">
            <h1>Leveraging market knowledge and technology to drive value</h1>
            <p> As a parent company, we oversee two subsidiaries, each vital in our mission to drive sustainable investments and
              create value for our stakeholders.</p>
          </div>
        </div>
        {/* item 3 */}
        <div className="banner" style={{ backgroundImage: `url(${banner3})` }} >
          <div className="banner_center">
            <h1>Making sustainable investments across the African
              continent</h1>
            <p>We leverage advanced technologies to streamline processes and enhance efficiency.
              From precision agriculture in Webzen Agro Allied Services to state-of-the-art
              e-commerce platforms in Hawaree Africa Limited.</p>
          </div>
        </div>
      </Carousel>

      <div className="landing_intro">
        <h1><span>Our</span> Innovative Approach</h1>
        <h2>
          At Kaxal Africa, we take pride in our commitment to innovation, utilising cutting-edge strategies to
          navigate the dynamic landscapes of agribusiness and consumer goods distribution.
        </h2>

        <div className="innovatives">
          <div className="innovative">
            <img src={bulb} alt="bulb" />
            <p className="grey">
              We leverage advanced technologies to streamline processes and enhance efficiency.
              From precision agriculture in Webzen Agro Allied Services to state-of-the-art
              e-commerce platforms in Hawaree Africa Limited, we integrate technology seamlessly
              to stay ahead of industry trends.
            </p>
          </div>
          <div className="innovative">
            <img src={chart} alt="bulb" />
            <p className="">
              Hawaree Africa Limited is dedicated to providing consumer goods with a
              customer-centric focus. Our e-commerce services are driven by personalised
              experiences, intuitive interfaces, and a commitment to delivering products swiftly and
              securely to the doorsteps of our valued customers.
            </p>
          </div>
          <div className="innovative">
            <img src={think} alt="bulb" />
            <p className="grey">
              Informed decisions are the cornerstone of our success. We harness the power of data
              analytics to gain actionable insights, optimise supply chains, predict market trends, and
              ensure that our agribusiness and consumer goods distribution services are practical and
              adaptive to changing demands.
            </p>
          </div>
          <div className="innovative">
            <img src={chain} alt="bulb" />
            <p className="">
              Recognising the importance of a robust supply chain, we continuously innovate to
              enhance its resilience. Through strategic partnerships, real-time tracking, and predictive
              analytics, we ensure a seamless flow of products from farm to consumer, meeting
              demand efficiently and reducing waste.
            </p>
          </div>
        </div>
      </div>
      <div className="landing_about">
        <h1><span>Who </span>We Are</h1>
        <h2 className="sub-heading">As a parent
          company, we oversee two subsidiaries, each vital in our mission to drive sustainable investments and
          create value for our stakeholders.</h2>

        <h3>Kaxal is a fusion and medly of our passions - Agriculture & E-Commerce. Kaxal Africa Limited has
          a rich history, starting as Webzen Agro Allied Services Limited</h3>
        <h3>Webzen started off with investments in the agribusiness space and; arising from business
          dynamics; saw the need to invest into the distribution and marketing of the finished products of
          investee firms at inception, which was later extended to that of partner agribusiness firms.</h3>
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
