import React from "react";
import "./style.css";

function Contact() {
  return <div>
    <section id="contact" className="contact-section bg-black">
      <div className="container">

        {/* resume, github, linkedin row */}
        <div className="row">

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-file text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Resume</h4>
                <hr className="my-4"/>
                <div className="text-black-50">
                  <a href="https://knightmac19.github.io/Portfolio/assets/images/PATRICK_DUNN_RESUME.pdf" target="_blank" rel="noopener noreferrer">Patrick Dunn Resume</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fab fa-github text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Github</h4>
                <hr className="my-4"/>
                <div className="text-black-50">
                  <a href="https://github.com/knightmac19/" target="_blank" rel="noopener noreferrer">github.com/knightmac19</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fab fa-linkedin text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">LinkedIn</h4>
                <hr className="my-4"/>
                <div className="text-black-50">
                  <a href="https://www.linkedin.com/in/patrick-dunn-3a14249b/" target="_blank" rel="noopener noreferrer">Patrick Dunn</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br/>
        <br/>

        {/* address, email, phone row */}
        <div className="row">

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Address</h4>
                <hr className="my-4"/>
                <div className="text-black-50">New Hartford, Connecticut</div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-envelope text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4"/>
                <div className="text-black-50">
                  <a href="#">pmdunn78@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Phone</h4>
                <hr className="my-4"/>
                <div className="text-black-50">+1 (860) 921-3424</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  </div>
};

export default Contact;