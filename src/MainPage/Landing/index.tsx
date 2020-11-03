import * as React from "react";

import { Jumbotron, Container } from "reactstrap";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

import "./index.css";

// import { ReactComponent as Logo } from "../../images/bigweblogo.svg";
const logo = require("../../images/bigweblogo.png");

const Landing = (): JSX.Element => (
  <>
    <Jumbotron fluid>
      <Container fluid style={{ paddingTop: "10px", paddingLeft: "10px" }}>
        <h1>Registration is open!</h1>
        Registration opened on November 2nd, 2020 at 8 p.m., and will remain
        open until November 13, 2020 at 8 p.m.
      </Container>
    </Jumbotron>
    <section className="hero">
      <div className="container">
        <Tilt
          className="event-container"
          trackOnWindow
          gyroscope
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
        >
          {/* <Logo className="logo" /> */}
          <img className="logo" src={String(logo)} alt="HackTJ" />
          <div className="event-date landing">December 12th-13th, 2020</div>
          <div className="event-location landing">Online</div>
          <div className="register-button-block-old top">
            <Link
              className="button register-button mentor blackbutton"
              to="registration"
            >
              Register for HackTJ 7.5
            </Link>
            <a
              className="button register-button mentor blackbutton"
              href="https://www.facebook.com/pg/HackTJOfficial/photos/?tab=album&album_id=2168769876535523"
            >
              2019 Pictures
            </a>
            <Link
              className="button register-button mentor blackbutton"
              to="history"
            >
              Past Projects
            </Link>
            {/* <a className="button register-button mentor" href="https://hacktj2019.devpost.com/">Devpost</a> */}
          </div>
        </Tilt>
      </div>
    </section>
  </>
);

export default Landing;
