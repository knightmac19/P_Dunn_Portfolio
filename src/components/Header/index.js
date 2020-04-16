import React from "react";
import "./style.css";

function Header() {
  return <div>
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Patrick Dunn</h1>
          <h2 className="text-white mx-auto mt-2 mb-3">FULL STACK WEB DEVELOPER</h2>
          <h2 className="text-white mx-auto mt-2 mb-0">HTML · CSS · jQuery · mySQL · MongoDB</h2>
          <h2 className="text-white mx-auto mt-2 mb-5">Express · React · Node.js</h2>
          <a href="#about" className="btn btn-primary js-scroll-trigger">My Story</a>
        </div>
      </div>
    </header>
  </div>
   

};


export default Header;