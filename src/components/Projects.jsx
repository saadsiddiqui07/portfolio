import React from "react";
import "./Projects.css";
import amazonImage from "../assets/amazon.png";
import messengerImage from "../assets/messenger.png";
import netflixImage from "../assets/netflix.png";
import whatsAppImage from "../assets/whatsapp.png";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const Projects = () => {
  const history = useHistory();
  return (
    <div className="projects">
      <h2>My Projects.</h2>
      <div className="projects__container">
        <div className="projects__card">
          <h3>Netflix Clone</h3>
          <img src={netflixImage} alt="Netflix" />
          <p>
            This is a netflix frontend clone built using ReactJS and deployed
            using firebase(BAAS), The information is fetched with a third party
            API which TMDP API which is totally free. It is a mobile responsive
            website.
          </p>
          <a
            className="projects__button"
            href="https://netflix-clone-d9f68.web.app/"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            View website <span>⇗</span>
          </a>
        </div>

        <div className="projects__card">
          <h3>Amazon Clone</h3>
          <img src={amazonImage} alt="Amazon" />
          <p>
            Built with ReactJS and deployed using firebase(BAAS). It has full
            user authentication with sign In/Out. Managing state with
            CONTEXT-API for adding and removing items from the cart. Mobile
            responsive web app.
          </p>

          <a
            target="_blank"
            without
            rel="noopener noreferrer"
            className="projects__button"
            href="https://clone-a43e0.web.app/"
          >
            View website <span>⇗</span>
          </a>
        </div>
      </div>
      <div className="projects__container">
        <div className="projects__card">
          <h3>Messenger Clone</h3>
          <img src={messengerImage} alt="Messenger" />
          <p>
            Built using ReactJS and deployed using firebase(BAAS). This a chat
            web app with full chat functionality. You can enter your name in the
            prompt and chat with multiple users at the same time. This is a
            mobile responsive web application.
          </p>

          <a
            className="projects__button"
            target="_blank"
            without
            rel="noopener noreferrer"
            href="https://messenger-clone-7.web.app/"
          >
            View website <span>⇗</span>
          </a>
        </div>
        <div className="projects__card">
          <h3>WhatsApp Clone</h3>
          <img src={whatsAppImage} alt="WhatsApp" />
          <p>
            Built using ReactJS and deployed using firebase(BAAS). Users can
            make their own rooms and chat with other users. It has google
            authentication where a user can sign In/Out using their google
            account. This is only for desktop.
          </p>

          <a
            className="projects__button"
            href="https://whatsapp-clone-7.web.app/"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            View website <span>⇗</span>
          </a>
        </div>
      </div>
      <Button onClick={() => history.push("/contact")}>Contact Me</Button>
    </div>
  );
};

export default Projects;
