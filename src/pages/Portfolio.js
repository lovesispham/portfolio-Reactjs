import React from "react";
import default_img from "../assets/img/project-1.jpg";
import data from "../assets/fake-data/projectdata.js";
import useModal from "../components/useModal.js";
import Modal from "../components/Modal.js";
import {Fade} from "react-awesome-reveal";
const Portfolio = () => {
  const { isShowing, handleOpen, handleClose, selected } = useModal();
  
  return (
    <div className="section section-hero-3">
        <div className="container">
            <div className="heading-sm">
            <span className="cicon-circle"></span> MY PORTFOLIO
            </div>
            <Fade direction="up" casade>
            <h1 className="heading">All Projects</h1>
            </Fade>
            <div className="row">
            <Fade direction="left" delay={200}>
            {data.project.map((item, index) => (
                
              <div className="col-xs-4" key={item.id}>
                <div className="item" onClick={()=> handleOpen(item.id)}>
                  <div className="photo">
                     
                    <img src={default_img} alt="" />
                    <div className="overlay-bg">
                      <h3 className="title">{item.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
              
          ))}
          </Fade>
            </div>
            
            <Modal
                            isShowing={isShowing}
                            close={handleClose}
                            project={selected}
                            />
        </div>
        
    </div>
    
  );
};
export default Portfolio;