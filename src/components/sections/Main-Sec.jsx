import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

import "animate.css";
import "/src/css/main.css";
import "animate.css/animate.min.css";

import ToolSec from "./Tool-Sec";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";

export default function MainSec() {
  return (
    <>
      <div className="hero">
        <section className="hero-sec">
          <div className="container">
            <div className="row">
              {/* left */}
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="left-side">
                  <div className="row">
                    <div className="img-col col-lg-4">
                      <img
                        className="animate__animated animate__fadeInUp"
                        src="/my-photos/1.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="info-col col-lg-8">
                      <div className="details animate__animated animate__fadeInRight">
                        <h4 className="name">Mahmoud Ali</h4>
                        <p>
                          Front-End Developer | React.js | JavaScript |
                          Responsive Web Design
                        </p>
                        <button className="d-flex align-items-center">
                          <a
                            href="https://mail.google.com/mail/u/0/#inbox"
                            className="cv"
                          >
                            Download CV
                          </a>
                          <img src="/svg/arrow-right.svg" alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right */}
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="row">
                  <div className="right-side">
                    <h4 className="title-ani animate__animated animate__fadeInRight dot">
                      Available for freelance
                    </h4>
                    <h1>
                      <span className="ele ele1 animate__animated animate__fadeInUp">
                        Hi! I'm
                      </span>
                      <span className="name marked ele ele2 animate__animated animate__fadeInDown">
                        Mahmoud Ali
                      </span>
                      <br />
                      <span className=" ele ele3 animate__animated animate__fadeInUp">
                        a
                      </span>
                      <span className=" ele ele4 animate__animated animate__fadeInUp">
                        Web Designer
                      </span>
                      <span className=" ele ele5 animate__animated animate__fadeInUp">
                        from
                      </span>
                      <span className="city marked ele ele6 animate__animated animate__fadeInRight">
                        Cairo
                      </span>
                      <span className=" ele ele7 animate__animated animate__fadeInUp">
                        turning your ideas into modern websites.
                      </span>
                    </h1>

                    <p className="bio bio-ani animate__animated animate__fadeInUp">
                      I’m dedicated to crafting websites that bring your ideas
                      to life, combining clean design and modern front-end
                      development to deliver fast, responsive, and impactful
                      results.
                    </p>

                    <div className="btn-sec">
                      <button className="btn d-flex align-center the-door the-door-ani animate__animated animate__fadeInRight">
                        <Link to="/projects">see what i can do</Link>
                        <img src="/svg/arrow-icon.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <MyProjects />
      <ToolSec />
      <ContactMe />
    </>
  );
}
