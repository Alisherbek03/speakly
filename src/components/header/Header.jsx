import React from "react";
import Button from "../button/Button";
import Headerimage from "../../assets/headerimage.svg";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-div">
        <div div className="text">
          <h1>Test Your Speaking in English Anywhere</h1>
          <p className="one-p">
            Unlock your design skills to create beautiful websites and apps with
            a poweful and easy-to-use tool.
          </p>
          <div className="header-btns">
            <Button className="header-button" text="Try for free " />
            <div className="middle-btn">
              <p>Watch to video</p>
              <a
                target="_blank"
                href="https://youtu.be/Ytu7-4HQGwk?si=nTEn2AnIVQGJQhgl"
                className="header-href"
              >
                <i className="fa-solid fa-circle-play"></i>
              </a>
            </div>
          </div>
        </div>
        <img className="header-image" src={Headerimage} alt="HeaderImage" />
      </div>
    </div>
  );
};

export default Header;
