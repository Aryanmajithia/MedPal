import Navbar from "../components/Navbar";
import "../App.css";
import "./about.css";
import Footer from "../components/Footer";
import { Fade } from "react-awesome-reveal";
import { Card, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar buttons={true} />
      <div id="about-container" style={{ minHeight: "80vh" }}>
        <div id="about-left-container">
          <Fade
            delay={10}
            direction="top"
            style={{ color: "black" }}
            triggerOnce
          >
            <h2>About Us</h2>
          </Fade>

          <p id="about-text">
            I am a passionate student developer who started working on this
            project as part of my college curriculum. But over the course of
            this project, I has grown to love this project and I am now working
            on it as a hobby. My mission is to scale this project up further and
            make it available to everyone.
          </p>
        </div>

        <div className="d-flex about-right">
          <div>
            <Fade
              delay={100}
              damping={0.05}
              triggerOnce
              className="d-flex justify-content-center align-items-center flex-column"
            ></Fade>
          </div>
          <div>
            <Fade
              delay={100}
              damping={0.05}
              triggerOnce
              className="d-flex justify-content-center align-items-center flex-column"
            >
              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/121624366?v=4"
                  alt="about-pic"
                />
              </div>
              <p style={{ textAlign: "center" }}>Aryan Majithia</p>

              <a
                className="about-links"
                href="https://github.com/aryanmajithia"
                style={{ textAlign: "center" }}
              >
                <AiFillGithub />
                aryanmajithia
              </a>

              <p style={{ textAlign: "center" }}>Full StackDeveloper</p>
            </Fade>
          </div>
          <div>
            <Fade
              delay={100}
              damping={0.05}
              triggerOnce
              className="d-flex justify-content-center align-items-center flex-column "
            ></Fade>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
