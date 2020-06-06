import React from "react";
import "./style.css";

function Navbar() {
  return <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <h3>
            <a className="nav-link js-scroll-trigger" href="#top">Top</a>
        </h3>
        
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {/* <h4>
                <a className="nav-link" href="https://github.com/knightmac19/R-profile/blob/master/public/PATRICK_DUNN_RESUME.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              </h4> */}
              <h4>
                <a className="nav-link js-scroll-trigger" href="#about">My Story</a>
              </h4>
            </li>
            <li className="nav-item">
              <h4>
                <a className="nav-link js-scroll-trigger" href="#projects">Projects</a>
              </h4>
            </li>
            <li className="nav-item">
              <h4>
                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  

};

export default Navbar;