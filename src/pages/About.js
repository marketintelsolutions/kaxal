import React, { useState } from "react";
import { Link } from "react-router-dom";
import { teamData, values } from "../utils/data";
import close from "../assets/logos/close.svg";
import { limitStringTo50Characters } from "../utils/helpers/arrangeText";
import aboutus from '../assets/images/aboutus.png'
import vision from '../assets/images/vision.png'
import mission from '../assets/images/mission.png'
import visionbg from '../assets/images/visionbg.png'
import tagline from '../assets/images/tagline.png'
import core from '../assets/images/core.png'
import bulb from '../assets/images/bulb.png'
import chart from '../assets/images/chart.png'
import think from '../assets/images/think.png'
import chain from '../assets/images/chain.png'

const coreValues = {
  heading: 'Core Values',
  text: 'S P I R I T',
  img: core,
  items: ['S	- Service with Passion', 'P	- Professionalism', 'I	- Integrity', 'R	- Respect for Individual', 'I	- Innovation', 'T	- Team Spirit']
}

const About = () => {
  const [content, setContent] = useState({});
  const [isContent, setIsContent] = useState(false);

  const handleClick = (e) => {
    console.log(e.target.classList.contains("details"));
    if (e.target.classList.contains("details")) setIsContent(false);
  };


  return (
    <section className="about">
      <div className="section-one" style={{ backgroundImage: `url(${aboutus})` }}>
        <div className="section-center">
          <h2>about kaxal</h2>
          <div className="link">
            <Link to="/">home</Link>
            <p> {" > about us"}</p>
          </div>
        </div>
      </div>
      <div className="section-two">
        <div className="content">
          <div className="left">
            <img
              src="https://res2.weblium.site/res/62c7f6e7b71ec0000d6bb66e/62d7ab44814afd000fcb870e_optimized_1187?nowebp"
              alt="fruit image"
            />
          </div>
          <div className="right">
            <h2>- ABOUT US -</h2>
            <h1>about the company</h1>
            <h3>
              Kaxal Africa Limited is a member of the Pan African Capital Holdings Group. <br /> <br />  As a parent
              company, we oversee two subsidiaries, each vital in our mission to drive sustainable investments and
              create value for our stakeholders.
            </h3>
            {/* <ul>
              <li>Webzen Agro Allied Services Limited – which provides investment and business support services to agribusinesses and </li>
              <li>Hawaree Africa Limited – which is focused on providing consumer goods distribution/ e-commerce services.</li>
            </ul> */}

            {/* <Link to='/services' >services</Link> */}
          </div>
        </div>



        <div className="statements" style={{ backgroundImage: `url(${visionbg})` }}>
          <div className="statements-center">
            <div className="statement-item">
              <img src={vision} alt="vision" />
              <h2><span>Our</span> Vision</h2>
              <p>To make sustainable investments across the African
                continent in the agribusiness and consumer goods
                distribution sectors.
              </p>
            </div>
            <div className="statement-item hawaree-statement">
              <img src={mission} alt="vision" />
              <h2><span>Our</span> Mission</h2>
              <p>Leveraging market knowledge and technology to drive
                value for our stakeholders.
              </p>
            </div>
          </div>

          <div className="bottom">
            <div className="statement-item">
              <img src={tagline} alt="vision" />
              <h2> Tagline</h2>
              <p>“… beyond limits”</p>
            </div>
            <div className="statement-item hawaree-statement">
              <img src={core} alt="vision" />
              <h2><span>Core</span> Values</h2>
              <p>SPIRIT</p>
              <div className="spirits">
                {
                  coreValues.items.map((item, index) => {
                    const letters = item.split('-')
                    return <p key={index}><span>{letters[0]} </span>- {letters[1]}</p>
                  })
                }
              </div>
            </div>
          </div>
        </div>

        {/* <div className="values">
          {
            values.map((value, index) => {
              const { heading, text, img, items } = value
              return <div className="value-item" key={index}>
                <img src={img} alt={heading} />
                <h2>{heading}</h2>
                <p>{text}</p>
                {heading === 'Core Values' && <div className="items">
                  {
                    items.map((item, index) => <p key={index}>{item}</p>)
                  }
                </div>}
              </div>
            })
          }
        </div> */}
      </div>

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

      <div className="section-three">
        <div className="center">
          <p className="desc">- Team -</p>
          <h1>Meet our Team</h1>
          <div className="team">
            {
              teamData.map((item, index) => {
                const { img, text, name, role } = item
                return <div className="team-item" key={index}>
                  <img src={img} alt="img" />
                  <h2>{name}</h2>
                  <div className="line"></div>
                  <h3>{role}</h3>
                  <p>{limitStringTo50Characters(text[0])} ...<span onClick={() => {
                    setIsContent(true);
                    setContent(item);
                  }}>Read More</span></p>
                </div>
              })
            }
          </div>
        </div>



        {isContent && (
          <div className="details" onClick={(e) => handleClick(e)}>
            <div className="center">
              <div className="close" onClick={() => setIsContent(false)}>
                <img src={close} alt="close" />
              </div>
              <h4>{content.name}</h4>
              <p>{content.text}</p>
              {/* <p>hello</p> */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
