import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => setShow(true);
  console.log(show);
  const closeMenu = () => setShow(false);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        {/* Brand Logo */}
        <div className="brand-logo d-flex align-items-center">
          <span className="icon">
            <img src="/svg/brand-icon.svg" alt="brand icon" />
          </span>
          <Link className="navbar-brand" to="/">
            Mahmoud
          </Link>
        </div>

        {/* Toggler Button for mobile */}
        <button
          onClick={toggleMenu}
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop Menu */}
        <div className="d-none d-md-flex w-100 align-items-center">
          {/* Projects in the center */}
          <ul className="navbar-nav mx-auto mb-0">
            <li className="nav-item">
              <Link className="nav-link bottom-line" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3 ms-auto">
            <a href="mailto:mahmoudlodzz12@gmail.com">
              Email:{" "}
              <span className="bottom-line">mahmoudlodzz12@gmail.com</span>
            </a>
            <Link to="/contact" className="btn contact-btn">
              Contact Me
            </Link>
          </div>
        </div>

        <div className={`fullscreen-menu ${show ? "show" : ""}`}>
          <span
            style={{ cursor: "pointer" }}
            onClick={closeMenu}
            className="close text-light"
          >
            ×
          </span>
          <ul className="menu-items">
            <li>
              <Link onClick={closeMenu} to="/projects" className="bottom-line">
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/contact" className="bottom-line">
                Contact Me
              </Link>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="mailto:mahmoudlodzz12@gmail.com"
                className="bottom-line"
              >
                mahmoudlodzz12@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
