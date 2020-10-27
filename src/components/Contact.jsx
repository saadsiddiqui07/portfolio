import React from "react";
import "./Contact.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__title">
        <h2>Contact Me.</h2>
      </div>
      <div className="contact__container">
        <div className="container__icons">
          <a href="https://github.com/saadsiddiqui07">
            <GitHubIcon className="main__icons" fontSize="large" />
            <p>saadsiddiqui07</p>
          </a>
        </div>

        <div className="container__icons">
          <a href="https://www.instagram.com/saadsiddiqui7_/">
            <InstagramIcon fontSize="large" className="main__icons" />
            <p>saadsiddiqui_7</p>
          </a>
        </div>
        <div className="container__icons">
          <a href="https://www.gmail.com">
            {" "}
            <EmailIcon fontSize="large" className="main__icons" />
            <p>saadsiddiqui927@gmail.com</p>
          </a>
        </div>
      </div>
      <div className="contact__footer">
        <span>Saad Siddiqui © 2020</span>
      </div>
    </div>
  );
};

export default Contact;
