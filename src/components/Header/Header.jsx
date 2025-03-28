import React from 'react';
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="navbar navbar-dark shadow-lg py-3" style={{ 
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)" 
      }}>
        <Container>
          {/* Logo & Brand */}
          <Navbar.Brand href="/" className="d-flex align-items-center fw-bold text-light">
            <FontAwesomeIcon icon={faMobileScreen} className="text-warning fs-2 me-2 align-middle" />
            MobileMart
          </Navbar.Brand>

          {/* Navbar Toggle for Mobile View */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none"/>

          {/* Collapsible Navigation Menu */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
              <Nav.Link href="/store" className="nav-link-custom">Store</Nav.Link>
              <Nav.Link href="/about" className="nav-link-custom">About</Nav.Link>
            </Nav>

            {/* Login Button */}
            <Button variant="outline-light" className="ms-0 fw-semibold px-4 py-2 rounded-pill btn-glow">Login</Button>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
