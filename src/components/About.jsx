import React from "react";
import "./About.css";
import myImage from "../assets/myavatar.png";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();

  return (
    <div className="about">
      <h2>About me?</h2>
      <div className="about__container">
        <img src={myImage} alt="saad" />
        <p>
          Hello! I am <span className="name">Saad Siddiqui</span>. I'm a 19
          years old meticulous Frontend Developer who loves to make elegant &
          responsive websites and web applications using REACT-JS. I am a
          college student who is pursuing a computer science degree. I've been
          coding in REACTJS for more than 1+ years with a clean hand in{" "}
          <span className="tools">REACT CONTEXT-API && REACT-REDUX</span> for
          state management and also <span>REACT HOOKS</span>. I am familiar with
          dev tools such as: <span>git,</span> <span>npm, </span>
          <span>firebase, </span> && <span>Material-ui.</span>
        </p>
      </div>

      <Button onClick={() => history.push("/projects")}>View projects</Button>
    </div>
  );
};

export default About;
