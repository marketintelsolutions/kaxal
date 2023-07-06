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
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31717.758664843128!2d3.4022878729333215!3d6.4300266338224015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52dc0328169%3A0x7885a1a33689a576!2sVictoria%20Island%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1688684258525!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
