import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "/src/css/main.css";

import ToolSec from "./Tool-Sec";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";

export default function MainSec() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });
  }, []);

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
                        src="/my-photos/1.jpeg"
                        alt=""
                        data-aos="fade-up"
                        data-aos-delay="200"
                      />
                    </div>

                    <div className="info-col col-lg-8">
                      <div
                        className="details"
                        data-aos="fade-left"
                        data-aos-delay="500"
                      >
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
                    <h4
                      className="title-ani dot"
                      data-aos="fade-left"
                      data-aos-delay="300"
                    >
                      Available for freelance
                    </h4>

                    <h1>
                      <span
                        className="ele ele1"
                        data-aos="fade-up"
                        data-aos-delay="0"
                      >
                        Hi! I'm
                      </span>

                      <span
                        className="name marked ele ele2"
                        data-aos="fade-down"
                        data-aos-delay="200"
                      >
                        Mahmoud Ali
                      </span>

                      <br />

                      <span
                        className="ele ele3"
                        data-aos="fade-up"
                        data-aos-delay="700"
                      >
                        a
                      </span>

                      <span
                        className="ele ele4"
                        data-aos="fade-up"
                        data-aos-delay="1000"
                      >
                        Web Designer
                      </span>

                      <span
                        className="ele ele5"
                        data-aos="fade-up"
                        data-aos-delay="1300"
                      >
                        from
                      </span>

                      <span
                        className="city marked ele ele6"
                        data-aos="fade-left"
                        data-aos-delay="1700"
                      >
                        Cairo
                      </span>

                      <span
                        className="ele ele7"
                        data-aos="fade-up"
                        data-aos-delay="1900"
                      >
                        turning your ideas into modern websites.
                      </span>
                    </h1>

                    <p
                      className="bio"
                      data-aos="fade-up"
                      data-aos-delay="1900"
                    >
                      I’m dedicated to crafting websites that bring your ideas
                      to life, combining clean design and modern front-end
                      development to deliver fast, responsive, and impactful
                      results.
                    </p>

                    <div className="btn-sec">
                      <button
                        className="btn d-flex align-center the-door"
                        data-aos="fade-left"
                        data-aos-delay="1900"
                      >
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
