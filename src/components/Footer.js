import React from "react";
import logo from "../assets/images/logo.png";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg";
import footerBg from "../assets/images/footerBg.svg";
import { BiLogoLinkedin } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="footer-center">
        <div className="left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <p>
            Hawaree Africa is our e-commerce and consumer goods distribution
            arm. We work with several international and domestic companies
            across a variety of consumer categories.
          </p>
          <div className="socials">
            <a href="" target='_blank'><img src={instagram} alt="instagram" /></a>
            <a href="https://web.facebook.com/people/KaxalAfrica/100087465067889" target='_blank'><img src={facebook} alt="facebook" /></a>
            <a href="" target='_blank'><img src={twitter} alt="twitter" /></a>
            {/* <a href="" target='_blank'><img src={youtube} alt="youtube" /></a> */}
            <a href="https://www.linkedin.com/company/kaxalafrica" target='_blank'><BiLogoLinkedin /></a>

          </div>
        </div>
        <div className="middle">
          <h2>Navigation</h2>
          <p className="link-item">about us</p>
          <p className="link-item">services</p>
          <p className="link-item">news</p>
          <p className="link-item">contact</p>
        </div>
        <div className="right">
          <h2>subscribe</h2>
          <p>Get the latest news from us!</p>
          <input placeholder="Email *" type="text" />
          <button>subscribe</button>
          <p className="info">
            * By clicking on Subscribe, you agree to receive our newsletter,
            which will include promotional and informational materials.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
