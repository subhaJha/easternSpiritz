import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

// IMPORT LOGO
import logo from "../assets/logo1.png";

export default function MainNavbar() {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      className="main-navbar"
      expanded={expanded}
    >
      <Container>
        {/* BRAND LOGO */}
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="brand-logo-wrapper"
          onClick={closeNavbar}
        >
          <img
            src={logo}
            alt="Eastern Spiritz"
            className="brand-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navbar-nav"
          onClick={() => setExpanded(prev => !prev)}
        />

        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-4">
            <Nav.Link as={NavLink} to="/" end onClick={closeNavbar}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={closeNavbar}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" onClick={closeNavbar}>
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/brands" onClick={closeNavbar}>
              Brands
            </Nav.Link>
            <Nav.Link as={NavLink} to="/regions" onClick={closeNavbar}>
              Regions
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={closeNavbar}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
