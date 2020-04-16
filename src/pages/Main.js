import React, { Component } from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class Main extends Component {
  
  
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Main;
