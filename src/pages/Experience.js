import React from "react";
import data from "../assets/fake-data/projectdata.js";
import {Fade} from "react-awesome-reveal";
const Experience = () => {
  return (
    <div className="section section-hero-4">
      <div className="container">
        <div className="heading-sm">
          <span className="cicon-circle"></span> EXPERIENCE & EDUCATION
        </div>
        
        <div className="row">
        
          <div className="col-xs-6">
          <Fade direction="up" cascade><h3 className="heading">Experience</h3></Fade>
            
            <div className="box-education">
              {data.exp.map((item, index) => (
                <Fade direction="up" cascade key={index}>
                <div className="item box-br" >
                  <p className="date">{item.year}</p>
                  <h3 className="title">
                    {item.name} <span className="text">{item.career}</span>
                  </h3>
                  <div className="desc">{item.desc}</div>
                </div>
                </Fade>
              ))}
            </div>
          </div>
          
          
          <div className="col-xs-6">
          <Fade direction="up" cascade>
            <h3 className="heading">Education</h3></Fade>
            <div className="box-education">
              {data.education.map((item, index) => (
                <Fade direction="up" cascade key={index}>
                <div className="item box-br" >
                  <p className="date">{item.year}</p>
                  <h3 className="title">
                    {item.name} <span className="text">{item.degree}</span>
                  </h3>
                  <div className="desc">{item.desc}</div>
                </div>
                </Fade>
              ))}
            </div>
          </div>
          
        </div>
        <Fade direction="up" cascade>
        <div className="heading-sm">
              <span className="cicon-circle"></span> My Skills
            </div>
            <h3 className="heading">Skills</h3>
        </Fade>
        
            <div className="box-skills">
            <Fade direction="left" delay={200}>
                <ul className="list">
                {data.skills.map((item, index) => (
                    <li key={index}>
                        <div className="photo">
                            <img src={item.img} alt=""/>
                        </div>
                        <div className="text-skills">{item.name}</div>
                    </li>
                    ))}
                </ul>
                </Fade>
            </div>
      </div>
    </div>
  );
};

export default Experience;
