import React from "react";
import "./Contact.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__title">
        <h2>Contact Me.</h2>
      </div>
      <div className="contact__container">
        <div className="container__icons">
          <a href="https://github.com/saadsiddiqui07" target="_blank">
            <GitHubIcon className="main__icons" fontSize="large" />
            <p>saadsiddiqui07</p>
          </a>
        </div>
        <div className="container__icons">
          <a href="https://www.gmail.com" target="_blank">
            {" "}
            <EmailIcon fontSize="large" className="main__icons" />
            <p>siddiquisaad1601@gmail.com</p>
          </a>
        </div>
        <div className="container__icons">
          <a
            href="https://www.linkedin.com/in/saad-siddiqui-0867391a3"
            target="_blank"
          >
            {" "}
            <LinkedInIcon fontSize="large" className="main__icons" />
            <p>Saad Siddiqui</p>
          </a>
        </div>
      </div>
      <div className="contact__footer">
        <span>Saad Siddiqui © 2021</span>
      </div>
    </div>
  );
};

export default Contact;
