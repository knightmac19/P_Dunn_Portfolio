import React from "react";
import "./style.css";
import ipad from "../img/ipad.png";


function About() {
  return <div>
    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Built with Bootstrap 4</h2>
            <p className="text-white-50">Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on
              <a href="http://startbootstrap.com/template-overviews/grayscale/">the preview page</a>. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
          </div>
        </div>
        <img src={ipad} className="img-fluid" alt="" />
      </div>
    </section>
  </div>
  
};

export default About;