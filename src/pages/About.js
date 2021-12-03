import React from "react";
import photo from "../assets/img/aboutme.jpg";
import {Fade} from "react-awesome-reveal";
const About = () => {
  return (
    <div className="section section-hero-2">
      <div className="container">
        <div className="row">
          <div className="col-xs-5">
          <Fade direction="left" delay={200}>
            <div className="photo">
              <img src={photo} alt="" />
            </div>
            </Fade>
          </div>
          
            <div className="col-xs-7">
            <Fade direction="up" cascade duration="500">
            <div className="heading-sm">
              {" "}
              <span className="cicon-circle"></span> ABOUT ME
            </div>
            <h1 className="heading">Hello, I am Huong Duong</h1>
            <div className="desc">
              I'm Web Developer. Currently, I'm living and working in Hanoi,
              Vietnam. My strengths are I am a hard working, critical thinking.
              My hobbies are travelling, take a photo and tasting street-food.
            </div>
            <div className="heading-sm">
              {" "}
              <span className="cicon-circle"></span> CONNECT WITH ME
            </div>
            <div className="social-link-group">
              <a href="/" className="social-link bg_fb" target="_blank">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="/" className="social-link" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="/" className="social-link bg_insta" target="_blank">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
            </Fade>
          </div>
          
          
        
          
          </div>  
      </div>
    </div>
  );
};

export default About;
