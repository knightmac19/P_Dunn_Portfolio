import React from "react";
import "./style.css";

import chazy from "../img/chazy.JPG";
import chichen2x from "../img/chichen2x.jpg";
import engelberg from "../img/engelberg.JPG";

function Projects() {
  return <div>
    <section id="projects" className="projects-section bg-light">
      <div className="container">

        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <a href="https://serene-river-18393.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img className="img-fluid img-main mb-3 mb-lg-0" src={engelberg} alt="Engelberg, Switzerland"/>
            </a>
            
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <a href="https://serene-river-18393.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <h3><strong>Matrixio</strong></h3>
              </a>
              
              <p className="text-black-50 mb-0">MERN stack application that allows speech language pathologists to create matrix exercises for their students.</p>
              <hr/>
              <div className="text-black-50 mb-0">
                <h5>My role:</h5>
                <p>Write the server routes connecting the user's input to the Mongo database.</p>
              </div>
              
              <hr/>
              <div className="social d-flex justify-content-center">
                <a href="https://github.com/pjpetro/Matrixio" target="_blank" rel="noopener noreferrer" className="mx-2">
                  <span><h5>Repo</h5></span>
                </a>
                
                <a href="https://serene-river-18393.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
                <span><h5>Site</h5></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end / matrixio  */}

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
          <a href="https://knightmac19.github.io/CrimeStats/" target="_blank" rel="noopener noreferrer">
            <img className="img-fluid" src={chichen2x} alt="Chichen Itza"/>
          </a>
            
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <a href="https://knightmac19.github.io/CrimeStats/" target="_blank" rel="noopener noreferrer">
                    <h3><strong>CrimeStats</strong></h3>
                  </a>
                  
                  <p className="mb-0 text-white-50">Personal project combining FBI data and MapBoxGL to show relative crime bubbles across the 50 states from 2000 - 2018.</p>
                  <hr className="d-none d-lg-block mb-0 ml-0"/>
                  <br/>
                  <div className="social d-flex justify-content-center">
                    <a href="https://github.com/knightmac19/CrimeStats" target="_blank" rel="noopener noreferrer" className="mx-2">
                      <span><h5>Repo</h5></span>
                    </a>
                    
                    <a href="https://knightmac19.github.io/CrimeStats/" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <span><h5>Site</h5></span>
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* end / crimestats  */}

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
          <a href="https://knightmac19.github.io/employee-directory-pmd/" target="_blank" rel="noopener noreferrer">
            <img className="img-fluid" src={chazy} alt="Chazy Lake"/>
          </a>
            
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-lg-right">
                  
                  <a href="https://knightmac19.github.io/employee-directory-pmd/" target="_blank" rel="noopener noreferrer">
                    <h3><strong>Employee Directory</strong></h3>
                  </a>
                  <p className="mb-0 text-white-50">React project that returns employee data from an API and continuously filters the results as the user searches across multiple categories (name, DOB, phone, etc.)</p>
                  <hr className="d-none d-lg-block mb-0 mr-0"/>
                  <br/>
                  <div className="social d-flex justify-content-center">
                    <a href="https://github.com/knightmac19/employee-directory-pmd" target="_blank" rel="noopener noreferrer" className="mx-2">
                      <span><h5>Repo</h5></span>
                    </a>
                    
                    <a href="https://knightmac19.github.io/employee-directory-pmd/" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <span><h5>Site</h5></span>
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* end / employeedirectory  */}
      </div>
    </section>
  </div>
};

export default Projects;