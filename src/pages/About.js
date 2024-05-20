import React, { useState } from "react";
import { Link } from "react-router-dom";
import { teamData, values } from "../utils/data";
import close from "../assets/logos/close.svg";
import { limitStringTo50Characters } from "../utils/helpers/arrangeText";
import aboutus from '../assets/images/aboutus.png'
import { hawareelogo, webzenlogo } from "../assets/logos";
import vision from '../assets/images/vision.png'
import visionbg from '../assets/images/visionbg.png'
import tagline from '../assets/images/tagline.png'
import core from '../assets/images/core.png'

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
              <img src={vision} alt="vision" />
              <h2><span>Our</span> Mission</h2>
              <p>Leveraging market knowledge and technology to drive
                value for our stakeholders.
              </p>
            </div>
          </div>

          <div className="bottom">
            <div className="statement-item">
              <img src={vision} alt="vision" />
              <h2> Tagline</h2>
              <p>“… beyond limits”</p>
            </div>
            <div className="statement-item hawaree-statement">
              <img src={vision} alt="vision" />
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
