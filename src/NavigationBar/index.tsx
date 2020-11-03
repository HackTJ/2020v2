import * as React from "react";

import { Navbar, Nav, NavLink, NavItem } from "reactstrap";

import "./index.css";

const NavigationBar = (): JSX.Element => (
  <Navbar
    sticky="top"
    className="navcontainer"
    bg="#64d861"
    style={{
      position: "sticky",
      top: "0px",
      display: "flex",
      flexDirection: "row",
      zIndex: 1000,
    }}
  >
    <Nav className="nav justify-content-center" navbar>
      <NavItem>
        <NavLink href="#intro">Intro</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#faq">FAQ</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#sponsor">Sponsors</NavLink>
      </NavItem>
      {/* <NavItem>
        <NavLink href="#demographics">Demographics</NavLink>
      </NavItem> */}
      <NavItem>
        <NavLink href="#schedule">Schedule</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#team">Team</NavLink>
      </NavItem>
      {/* <NavItem>
        <NavLink href="#map">Map</NavLink>
      </NavItem> */}
    </Nav>
  </Navbar>
);

export default NavigationBar;
