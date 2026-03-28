import React, { useState } from "react";
import "/src/css/myProjects.css";
import "animate.css";
import "animate.css/animate.min.css";
import projects from "../../data/projects-api";
import { Link } from "react-router-dom";

export default function MyProjects() {
  const [activeId, setActiveId] = useState();

  return (
    <div className="projects">
      <div className="container-fluid top-titles">
        <p
          style={{ animationDelay: ".4s" }}
          className="dot mini-title wow animate__animated animate__fadeInUp"
        >
          [01] - Featured projects
        </p>
        <h1
          style={{ animationDelay: ".6s" }}
          className="wow animate__animated animate__fadeInUp"
        >
          I blend creativity with technical expertise
        </h1>
      </div>
      <div className="project-sec">
        <div className="container-fluid px-0">
          <div className="row g-0">
            {projects.map((project) => {
              return (
                <div key={project.id} className="col-lg-6 col-md-6 col-sm-12">
                  <div
                    className={`project-card wow animate__animated animate__fadeInDown ${
                      activeId === project.id ? "active-preview" : ""
                    }`}
                  >
                    <div className="card-body">
                      <div className="top">
                        <h3>{project.title}</h3>
                        <span
                          onClick={() =>
                            setActiveId(
                              activeId === project.id ? null : project.id,
                            )
                          }
                          className="quick-preview d-flex"
                        >
                          <img src="/icons/tap-icon.png" alt="" />
                        </span>
                      </div>
                      <p>{project.category}</p>
                      <div className="tech-tools">
                        {project.technologies.core.map((tech) => (
                          <button className="btn" key={tech}>
                            {tech}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="card-img">
                      <img src={project.media.thumbnail} alt={project.title} />
                    </div>
                    <div className="project-links">
                      <a
                        href={project.links.github}
                        className="github-link d-flex align-items-center"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                        <span>code </span>
                      </a>
                      <a
                        href={project.links.live}
                        className="live-demo-link d-flex align-items-center"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-box-arrow-up-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                          />
                        </svg>
                        <span>live demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
