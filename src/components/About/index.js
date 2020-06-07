import React from "react";
import "./style.css";

import teotihuacan from "../img/teotihuacan.JPG";
import cuttingBoard from "../img/cuttingBoard.jpeg";
import shadowBoxes from "../img/shadowBoxes.jpeg";
import addition from "../img/addition.jpg";
import SantaRosaDeViterbo from "../img/SantaRosaDeViterbo.jpg";
import chichen2x from "../img/chichen2x.jpg";

function About() {
  return <div>
    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">My Story</h2>
            <p className="text-white-50">
              I've worked as a carpenter, a translator, and an English teacher in Mexico. I enjoy building elegant systems, learning new things, and improving myself. In November 2019 I began studying to become a Web Developer.
            </p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-3 mx-auto">
            <figure>
            <img src={cuttingBoard} className="img-fluid rounded-circle" alt="" /> 
              <figcaption className="text-white-50 mt-1">End-grain cutting board</figcaption>
            </figure>
          </div>
          <div className="col-lg-3 mx-auto">
          <figure>
            <img src={shadowBoxes} className="img-fluid rounded-circle" alt="" /> 
              <figcaption className="text-white-50 mt-1">Stairwell shadow boxes</figcaption>
            </figure>
          </div>
          <div className="col-lg-3 mx-auto">
          <figure>
            <img src={addition} className="img-fluid rounded-circle" alt="" /> 
              <figcaption className="text-white-50 mt-1">In-law apartment</figcaption>
            </figure>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto">
            <p className="text-white-50">
              Changing careers wasn't easy. The intensive bootcamp I took required me to be comfortable with ambiguity during the learning process. Some weeks I felt I was barely keeping my head above water. 
            </p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-3 mx-auto">
          <figure>
            <img src={SantaRosaDeViterbo} className="img-fluid rounded-circle" alt="" /> 
              <figcaption className="text-white-50 mt-1">Santiago de Querétaro</figcaption>
            </figure>
          </div>
          <div className="col-lg-3 mx-auto">
          <figure>
            <img src={teotihuacan} className="img-fluid rounded-circle" alt="" /> 
              <figcaption className="text-white-50 mt-1">Teotihuacán</figcaption>
            </figure>
          </div>
          <div className="col-lg-3 mx-auto">
          <figure>
            <img src={chichen2x} className="img-fluid rounded-circle" alt="" /> 
              <figcaption className="text-white-50 mt-1">Chichén Itzá</figcaption>
            </figure>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto">
            <p className="text-white-50">
              Over time the hours of studying paid off. From an HTML-novice I grew into a Full Stack Developer with a robust portfolio. What used to be unkown and overwhelming -- DOM manipulation, asynchronous functions, the MERN stack -- have become trusted tools. 
            </p>
          </div>
        </div>
        
      </div>
    </section>
  </div>
  
};

export default About;