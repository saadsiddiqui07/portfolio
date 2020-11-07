import React from "react";
import "./Home.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import myAvatar from "../assets/myavatar.png";

const Home = () => {
  const history = useHistory();

  return (
    <div className="home">
      <div className="home__container">
        <h1>Hi I am Saad Siddiqui.</h1>
        <h2>ReactJS Front-end Developer.</h2>
        <h4>I code elegant && simple components.</h4>
      </div>
      <img src={myAvatar} alt="" />
      <Button onClick={() => history.push("/about")}> View more</Button>
    </div>
  );
};

export default Home;
