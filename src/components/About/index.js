import React from "react";
import "./style.css";
import ipad from "../img/ipad.png";
import chazy from "../img/chazy.JPG";
import engelberg from "../img/engelberg.JPG";
import adirondacks from "../img/adirondacks.JPG";
import huasteca from "../img/huasteca.JPG";
import teotihuacan from "../img/teotihuacan.JPG";
import chazyGray from "../img/chazyGray.jpg";
import engelbergGray from "../img/engelbergGray.jpg";
import adirondacksGray from "../img/adirondacksGray.jpg";
import huastecaGray from "../img/huastecaGray.jpg";
import teotihuacanGray from "../img/teotihuacanGray.jpg";



// url("../img/bg-masthead.jpg"); 
   
// url("../img/adirondacks.JPG");
   
// url("../img/chazy.JPG");
  
// url("../img/engelberg.JPG");
 
// url("../img/huasteca.JPG");
   
// url("../img/teotihuacan.JPG");
{/* <img src={teotihuacan} className="img-fluid" alt="" /> */}

function About() {
  return <div>
    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">My Story</h2>
            <p className="text-white-50">
              I've worked as a carpenter, a translator, and an English teacher in Mexico. I enjoy building elegant systems, learning new things, and improving myself. In November 2019 I began studying to become a Web Developer.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">My Story</h2>
            <p className="text-white-50">
              Changing careers wasn't easy. The intensive bootcamp I took required me to be comfortable with ambiguity during the learning process. Some weeks I felt I was barely keeping my head above water. 
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">My Story</h2>
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