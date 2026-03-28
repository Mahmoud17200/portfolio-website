import React, { useState } from "react";
import "/src/css/contact-me.css";
import { Link } from "react-router-dom";
import "animate.css";
import "animate.css/animate.min.css";

function ContactMe() {
  let [color] = useState([
    { mainColor: "#00c6ff", secondaryColor: "#0072ff" },
    { mainColor: "#c32aa3", secondaryColor: "#7232bd" },
    { mainColor: "#0A66C2", secondaryColor: "#3b5998" },
    { mainColor: "#1B1F23", secondaryColor: "#b5b5b5" },
  ]);
  let [links] = useState([
    {
      name: "Facebook",
      link: "https://www.facebook.com/share/1ApwgekXU8/?mibextid=LQQJ4d",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/mahmouddalii10?igsh=MWE3MnBrMHp2NDE5dg%3D%3D&utm_source=qr",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/mahmoud-ali-21a7883a9?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    {
      name: "Github",
      link: "https://github.com/Mahmoud17200",
    },
  ]);
  let [socialIcon] = useState([
    {
      src: "/icons/facebook.png",
    },
    {
      src: "/icons/instagram.png",
    },
    {
      src: "/icons/linkedin.png",
    },
    {
      src: "/icons/github.png",
    },
  ]);
  return (
    <div className="contact-me">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="top-titles">
              <h4
                style={{ animationDelay: ".3s" }}
                className="mini-title dot wow animate__animated animate__fadeInDown"
              >
                [03] - Contact Me
              </h4>
              <h1
                style={{ animationDelay: ".5s" }}
                className="wow animate__animated animate__fadeInUp"
              >
                my social media profiles
              </h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {color.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <a href={`${links[index].link}`} target="_blank">
                  <div
                    style={{
                      animationDelay: `${0.8 + index * 0.2}s`,
                      background: `linear-gradient(120deg, ${item.mainColor}, ${item.secondaryColor})`,
                    }}
                    className="social-card wow animate__animated animate__fadeInUp"
                  >
                    <h4 style={{ color: "#fff" }}>{links[index].name}</h4>

                    <img className="social-icon" src={`${socialIcon[index].src}`} />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
