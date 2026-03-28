import React from "react";
import "/src/css/main.css";
import "animate.css";
import "animate.css/animate.min.css";
import "../../css/toolSec.css";

function ToolSec() {
  return (
    <div style={{ backgroundColor: "#141414" }} className="tool-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="left-side">
              <p className="dot mini-title bottom-line wow animate__animated animate__fadeInDown def-ani def-ani1">
                [02]-tools & skills
              </p>
              <h1 className="wow animate__animated animate__fadeInUp def-ani2">
                my frontend toolbox
              </h1>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="right-side">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="skill wow animate__animated animate__fadeInUp def-ani3">
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
                    <div className="skill wow animate__animated animate__fadeInUp def-ani4">
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
                    <div className="skill wow animate__animated animate__fadeInUp def-ani5">
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
                    <div className="skill wow animate__animated animate__fadeInUp def-ani6">
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
                    <div className="skill wow animate__animated animate__fadeInUp def-ani7">
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
