import React, { useState } from "react";
import { Link } from "react-router-dom";
import { teamData, values } from "../utils/data";
import close from "../assets/logos/close.svg";
import { limitStringTo50Characters } from "../utils/helpers/arrangeText";

const About = () => {
  const [content, setContent] = useState({});
  const [isContent, setIsContent] = useState(false);

  const handleClick = (e) => {
    console.log(e.target.classList.contains("details"));
    if (e.target.classList.contains("details")) setIsContent(false);
  };

  return (
    <section className="about">
      <div className="section-one">
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
              Kaxal Africa Limited is a member of the Pan African Capital Holdings Group. Kaxal Africa is a parent company to two sub – companies as follows:
            </h3>
            <p>
              Webzen Agro Allied Services Limited – which provides investment and business support services to agribusinesses and <br />
              <br /> Hawaree Africa Limited – which is focused on providing consumer goods distribution/ e-commerce services.
            </p>
            <Link to='/services' >services</Link>
          </div>
        </div>
        <div className="values">
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
