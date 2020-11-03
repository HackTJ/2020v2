import * as React from "react";

import "./index.css";

const Schedule = (): JSX.Element => (
  <>
    <a className="anchor" id="schedule" href="#schedule">
      Schedule
    </a>
    <section className="schedule" id="schedules">
      <div className="container">
        {/* <div
         className="horizontal-segment green"
         style={{ left: "-6%", top: "-4.4%", width: "112%" }}
        ></div>
        <div
         className="vertical-segment green"
         style={{ left: "-5.9%", top: "-3.4%" }}
        ></div> */}
        <h1 className="section-title">Schedule</h1>
        <h2 className="day-title">Saturday, December 12</h2>
        <ul className="day">
          <li className="item">
            <h6 className="time">10:00am</h6>
            <div className="description">Opening Ceremony</div>
          </li>
          <li className="item">
            <h6 className="time">11:00am</h6>
            <div className="description">Hacking Begins</div>
          </li>
          <li className="item">
            <h6 className="time">2:00pm</h6>
            <div className="description">Workshops Begin</div>
          </li>
          <li className="item">
            <h6 className="time">2:30pm</h6>
            <div className="description">TypeRacer Tournament</div>
          </li>
          <li className="item">
            <h6 className="time">4:30pm</h6>
            <div className="description">Chess Blitz</div>
          </li>
          <li className="item">
            <h6 className="time">7:00pm</h6>
            <div className="description">Board Game Emulator</div>
          </li>
          <li className="item">
            <h6 className="time">8:00pm</h6>
            <div className="description">MLH Mini-Event</div>
          </li>
        </ul>
        <h2 className="day-title">Sunday, December 13</h2>
        <ul className="day">
          <li className="item">
            <h6 className="time">2:00pm</h6>
            <div className="description">Pictionary</div>
          </li>
          <li className="item">
            <h6 className="time">5:00pm</h6>
            <div className="description">Hacking Ends</div>
          </li>
          <li className="item">
            <h6 className="time">5:30pm</h6>
            <div className="description">Judging Starts</div>
          </li>
          <li className="item">
            <h6 className="time">8:30pm</h6>
            <div className="description">Closing Ceremony</div>
          </li>
        </ul>
      </div>
    </section>
  </>
);

export default Schedule;
