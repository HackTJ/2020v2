import React from "react";

import { Link } from "react-router-dom";

import "./index.css";

const RegistrationInfo = (): JSX.Element => (
  <>
    <a className="anchor" id="registration" href="#registration">
      Registration Info
    </a>
    <section className="registration-info">
      <div className="container">
        {/* <div className="vertical-segment green"></div> */}
        <h1 className="section-title">Registration Info</h1>
        <p className="large centered">
          Registration for participants will open at 8 p.m. on November 2nd, so
          make sure you&rsquo;re ready!
        </p>
        <p className="large centered">
          When you register you&apos;ll be asked for the field trip form. If you
          want to be able to submit your registration quickly, fill it out in
          advance. The form is located here:{" "}
          <Link
            to={`${process.env.PUBLIC_URL || ""}/forms/field_trip.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Field Trip Form
          </Link>
          . Remember, HackTJ is only open to current high school students!
        </p>
        <p className="large centered">
          When registering you&#39;ll also have the option to upload a
          r&eacute;sum&eacute;, which would be given to certain sponsors looking
          to recruit hackers. You will also have a chance to submit your
          r&eacute;sum&eacute; after you register if you are not ready to upload
          it now.
        </p>
        <p className="large centered">
          Please note that registering alone does not guarantee you will receive
          a ticket. Tickets decisions will be made based on a variety of factors
          including the date/time you register, so make sure to sign up quickly!
          Tickets decisions will be sent out on December 1, 2020, but this date
          may change.
        </p>
      </div>
    </section>
  </>
);

export default RegistrationInfo;
