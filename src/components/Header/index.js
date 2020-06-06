import React from "react";
import "./style.css";

function Header() {
  return <div>
    <header id="top" className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Patrick Dunn</h1>
          <h2 className="text-white mx-auto mt-2 mb-5">FULL STACK WEB DEVELOPER</h2>
          <h2 className="text-white mx-auto mt-2 mb-0">MongoDB · Express · React · Node.js</h2>
          <h2 className="text-white mx-auto mt-2 mb-5">HTML · CSS · Javascript · mySQL</h2>
          
          <div>
            <a href="https://knightmac19.github.io/Portfolio/assets/images/PATRICK_DUNN_RESUME.pdf" target="_blank" rel="noopener noreferrer"  className="btn btn-primary mr-5">Resume</a>
            <a href="https://github.com/knightmac19/" target="_blank" rel="noopener noreferrer" className="btn btn-primary ">Github</a>
          </div>
          <hr/>
          

          <a href="#about" className="btn btn-primary js-scroll-trigger">My Story</a>
        </div>
      </div>
    </header>
  </div>
   

};


export default Header;