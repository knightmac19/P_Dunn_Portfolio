import React from "react";
import "./style.css";
import bgMasthead from "../img/bg-masthead.jpg";
import demoImage01 from "../img/demo-image-01.jpg";
import demoImage02 from "../img/demo-image-02.jpg";
import chazy from "../img/chazy.JPG";
import teotihuacan from "../img/teotihuacan.JPG";
import chichen2x from "../img/chichen2x.jpg";
import engelberg from "../img/engelberg.JPG";

function Projects() {
  return <div>
    <section id="projects" className="projects-section bg-light">
      <div className="container">

        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={engelberg} alt="Engelberg, Switzerland"/>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>TimeTracker</h4>
              <p className="text-black-50 mb-0">Time managing tool for contractors with built-in invoice funcitonality.</p>
              <div className="social d-flex justify-content-center">
                <a href="https://github.com/pjpetro/TimeTracker" target="_blank" rel="noopener noreferrer" className="mx-2">
                  <span><h6>Repo</h6></span>
                </a>
                
                <a href="https://timeveil.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
                <span><h6>Site</h6></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={chichen2x} alt="Chichen Itza"/>
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">CrimeStats</h4>
                  <p className="mb-0 text-white-50">Crime incidents by type, state, and year.</p>
                  <div className="social d-flex justify-content-center">
                    <a href="https://github.com/knightmac19/CrimeStats" target="_blank" rel="noopener noreferrer" className="mx-2">
                      <span><h6>Repo</h6></span>
                    </a>
                    
                    <a href="https://knightmac19.github.io/CrimeStats/" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <span><h6>Site</h6></span>
                    </a>
                  </div>
                  <hr className="d-none d-lg-block mb-0 ml-0"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={chazy} alt="Chazy Lake"/>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">WeatherApp</h4>
                  <p className="mb-0 text-white-50">Find the forecast for your city, or a city a world away.</p>
                  <div className="social d-flex justify-content-center">
                    <a href="https://github.com/knightmac19/WeatherApp" target="_blank" rel="noopener noreferrer" className="mx-2">
                      <span><h6>Repo</h6></span>
                    </a>
                    
                    <a href="https://knightmac19.github.io/WeatherApp/" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <span><h6>Site</h6></span>
                    </a>
                  </div>
                  <hr className="d-none d-lg-block mb-0 mr-0"/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
};

export default Projects;