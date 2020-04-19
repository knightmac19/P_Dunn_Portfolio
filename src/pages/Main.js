import React, { Component } from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";



class Main extends Component {

  state = {
    isTop: true,
    
  };
  


  navbarCollapse = function() {
    console.log("navbarCollapse");
    var mainNav = document.getElementById("mainNav");
    if (window.scrollY < 100) {
      mainNav.removeAttribute("class", "navbar-shrink");
    } else {
      mainNav.setAttribute("class", "navbar-shrink");
    }
    
  }

  navbarUncollapse = function() {
    return this.state.mainNav.removeAttribute("class", "navbar-shrink");
  }
  
  stackScroll = function() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }    
    });
  }

  componentDidMount() {
    // this.navbarCollapse()
    this.stackScroll()
  }
  
  render() {
    return (
      <div >
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
