import React, { useEffect } from "react";
import "/src/css/main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/toolSec.css";

function ToolSec() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#141414" }} className="tool-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="left-side">
              <p className="dot mini-title bottom-line fade-down-custom"
                data-aos="fade-down"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                [02]-tools & skills
              </p>
              <h1 className="fade-up-custom"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                my frontend toolbox
              </h1>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="right-side">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="skill fade-left-custom"
                      data-aos="fade-left"
                      data-aos-duration="1200"
                      data-aos-delay="300"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="img-body d-flex align-items-center justify-content-center">
                              <img src="/icons/html.png" alt="" />
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-8 col-sm-12">
                            <h3 className="skill-name">html5</h3>
                            <p className="desc">
                              Semantic and accessible markup for modern web
                              applications.
                            </p>
                            <div className="progress-wrapper">
                              <div
                                className="progress"
                                role="progressbar"
                                aria-label="Example with label"
                                aria-valuenow="90"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: "90%",
                                    backgroundColor: "#8cff20",
                                  }}
                                ></div>
                              </div>

                              <span
                                className="progress-text"
                                style={{ left: "90%" }}
                              >
                                90%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="skill fade-right-custom"
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="300"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="img-body d-flex align-items-center justify-content-center">
                              <img
                                style={{ width: "30px" }}
                                src="/icons/css.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-8 col-sm-12">
                            <h3 className="skill-name">css3</h3>
                            <p className="desc">
                              Responsive layouts, Flexbox, Grid, and perfect UI
                              design.
                            </p>
                            <div className="progress-wrapper">
                              <div
                                className="progress"
                                role="progressbar"
                                aria-label="Example with label"
                                aria-valuenow="90"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: "90%",
                                    backgroundColor: "#8cff20",
                                  }}
                                ></div>
                              </div>

                              <span
                                className="progress-text"
                                style={{ left: "90%" }}
                              >
                                90%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="skill fade-left-custom"
                      data-aos="fade-left"
                      data-aos-duration="1200"
                      data-aos-delay="300"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="img-body d-flex align-items-center justify-content-center">
                              <img
                                style={{ width: "30px" }}
                                src="/icons/js.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-8 col-sm-12">
                            <h3 className="skill-name">javascript</h3>
                            <p className="desc">
                              Dynamic functionality, DOM manipulation, and API
                              integration.
                            </p>
                            <div className="progress-wrapper">
                              <div
                                className="progress"
                                role="progressbar"
                                aria-label="Example with label"
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: "80%",
                                    backgroundColor: "#8cff20",
                                  }}
                                ></div>
                              </div>

                              <span
                                className="progress-text"
                                style={{ left: "80%" }}
                              >
                                80%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="skill fade-right-custom"
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="300"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="img-body d-flex align-items-center justify-content-center">
                              <img
                                style={{ width: "30px" }}
                                src="/icons/react.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-8 col-sm-12">
                            <h3 className="skill-name">react</h3>
                            <p className="desc">
                              Building reusable components and scalable
                              single-page applications.
                            </p>
                            <div className="progress-wrapper">
                              <div
                                className="progress"
                                role="progressbar"
                                aria-label="Example with label"
                                aria-valuenow="85"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: "85%",
                                    backgroundColor: "#8cff20",
                                  }}
                                ></div>
                              </div>

                              <span
                                className="progress-text"
                                style={{ left: "85%" }}
                              >
                                85%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="skill fade-left-custom"
                      data-aos="fade-left"
                      data-aos-duration="1200"
                      data-aos-delay="300"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="img-body d-flex align-items-center justify-content-center">
                              <img
                                style={{ width: "30px" }}
                                src="/icons/bootstrap.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-8 col-sm-12">
                            <h3 className="skill-name">bootstrap</h3>
                            <p className="desc">
                              Fast and mobile-first UI development with prebuilt
                              components.
                            </p>
                            <div className="progress-wrapper">
                              <div
                                className="progress"
                                role="progressbar"
                                aria-label="Example with label"
                                aria-valuenow="90"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: "90%",
                                    backgroundColor: "#8cff20",
                                  }}
                                ></div>
                              </div>

                              <span
                                className="progress-text"
                                style={{ left: "90%" }}
                              >
                                90%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolSec;
