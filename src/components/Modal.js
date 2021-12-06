import React from "react";
import ReactDOM from "react-dom";

import default_img from "../assets/img/project-1.jpg";
const Modal = ({ isShowing, close, project }) =>

  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={`modal-popup_style2 ${isShowing ? "open view-transition-fade-expand-enter-active":"view-transition-fade-shrink-leave"} `}>
            <div className="popup-container pu-review">
              <span className="popup-close" onClick={close}>
                <i className="fa fa-close"></i>
              </span>
              <div className="pu-content">
                <h3 className="text-center heading">{project.name}</h3>
                <ul className="list">
                  <li>
                    <div className="text">
                        <i className="fa fa-file-text-o"></i>
                        <span className="project-label">Project :</span>
                        <span className="fbold"> {project.name}</span>
                    </div>
                  </li>
                  
                  <li>
                    
                    <a className="text" href={`//${project.link}`} target="_blank" rel="noopener noreferrer" alt="" >
                    <i className="fa fa-external-link"></i>
                    <span className="project-label">Preview :</span>
                    <span className="link"> Click link here</span>
                    </a>
                  </li>
                  <li>
                    <div className="text">
                    <i className="fa fa-code"></i>
                    <span className="project-label">Langages :</span>
                    
                    <span className="fbold"> {project.language}</span>
                    </div>
                  </li>
                </ul>
                <div className="photo">
                <img src={project.img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
