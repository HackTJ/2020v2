import React from "react";

import "./index.css";

const RegistrationChoice = (): JSX.Element => (
  <>
    <a className="anchor" id="register" href="#register">
      Register
    </a>
    <section id="register">
      <div
        className="container"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          margin: "auto",
        }}
      >
        {/* <div
         className="vertical-segment green"
         style={{ left: "-15%", top: "-14%", height: "123%" }}
        ></div> */}
        <h1 className="section-title">Register</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          <a
            className="flatbutton"
            style={{ width: "80%" }}
            href="https://tinyurl.com/hacktjstudent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text">Participants</div>
          </a>
          <a
            className="flatbutton long-label"
            style={{ width: "80%" }}
            href="https://tinyurl.com/hacktjmentorjudge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text">Judges/Mentors</div>
          </a>
        </div>
        <br />
        <p className="large centered">
          Participants must be current high school students. Computer science
          and engineering experience is not necessary, as we&#39;ll have
          workshops and mentors so you can learn. Please note that registering
          alone does not guarantee you will receive a ticket. Admission
          decisions will be made based on a variety of factors including the
          date/time you register, so make sure to sign up quickly!
        </p>
        <br />
        <p className="large centered">
          Judges must be present during the entire judging process (5:00 p.m. to
          7:30 p.m. on Sunday), but not necessarily during the entire hackathon.
          Computer science and engineering experience is preferred but not
          required.
        </p>
        <br />
        <p className="large centered">
          Mentors help students if they have any technical questions, and
          don&#39;t have to be present online the entire time. Computer science
          and engineering experience is required.
        </p>
        <br />
      </div>
    </section>
  </>
);

export default RegistrationChoice;
