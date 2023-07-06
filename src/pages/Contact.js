import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="contact">
      <div className="section-one">
        <div className="section-center">
          <h2>contacts</h2>
          <div className="link">
            <Link to="/">home </Link>
            <p> {" > contacts"}</p>
          </div>
        </div>
      </div>
      <div className="section-two">
        <div className="section-center">
          <div className="left">
            <h2>- contacts -</h2>
            <h1>Get in Touch</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <div className="items">
              <div className="item">
                <span>
                  <CiLocationOn />
                </span>
                <div className="text">
                  <h2>we are here</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="item">
                <span>
                  <AiOutlinePhone />
                </span>
                <div className="text">
                  <h2>contacts</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="item">
                <span>
                  <CiClock2 />
                </span>
                <div className="text">
                  <h2>hours</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <form>
              <input type="text" placeholder="Your Name*" />
              <input type="number" placeholder="Phone Number*" />
              <input type="email" placeholder="Email*" />
              <textarea name="" placeholder="Your message"></textarea>
              <button>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
