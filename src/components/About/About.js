import React from "react";
import Footer from "../Footer/Footer";
import TopBar from "../Shared/TopBar/TopBar";
import "./About.css";
import AboutUsSlider from "./AboutUsSlider";
import HireUs from "./HireUs";
const About = () => {
  return (
    <div>
      <TopBar></TopBar>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="AboutTitleLg">About Us</span>
        </div>
        <img
          className="headerImg"
          src="https://i.ibb.co/StVRvyQ/pexels-fauxels-3183150.jpg"
          alt="Header"
        />
      </div>
      <div className="aboutContentContainer">
        <div className="aboutImageContainer">
          <img
            src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg"
            alt=""
            className="aboutImage"
          />
        </div>
        <div className="aboutContent">
          <h2 className="whoWeAre">Who We Are?</h2>
          <p className="whoWeAreDes">
            We Are a Team of developers who are passionate about building web
            applications. And Based In Bangladesh. We have been building web
            apps for over 2 years. And we have build a lot of realtime projects
            and have a lot of satisfied customers from all over the world. We
            use MERN stack for our projects.
          </p>
        </div>
      </div>
      <AboutUsSlider></AboutUsSlider>
      <HireUs></HireUs>
      <Footer></Footer>
    </div>
  );
};

export default About;
