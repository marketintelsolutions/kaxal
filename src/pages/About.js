import React from "react";
import { Link } from "react-router-dom";

const About = () => {
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
              cumque.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              veritatis minus deserunt odit repellat! <br />
              <br /> Reprehenderit amet ullam est laboriosam hic ex, vero sit
              earum neque nemo expedita id distinctio sint.
            </p>
            <button>products</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
