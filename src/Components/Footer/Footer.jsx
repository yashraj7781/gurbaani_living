// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
// import '.'
import { assets } from "../../assets/assets";

const Foooter = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="footer-logo"/>
          <p>
            {" "}
            Discover comfort and convenience with Gurbaani Living, your trusted
            partner in finding the perfect PG accommodation. With premium
            facilities, prime locations, and a commitment to exceptional
            service, we ensure a hassle-free living experience tailored to your
            needs. Contact us today and make your stay truly memorable
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <li>Home</li>
          <li>About us</li>
          <li>Privacy Policy</li>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91364748453</li>
            <li>gurbaaniliving@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 © GurbaaniLiving - All Right Reserved
      </p>
    </div>
  );
};

export default Foooter;
