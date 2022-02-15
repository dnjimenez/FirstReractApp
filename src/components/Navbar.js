import React from 'react';
import { Container, Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget';
import './Navbar.css';


const navbar = () => {
  return <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">
      {/* TODO: Mejorar esto, esta levantando un warning */}
      <Link className = "noDecorationLink"to="/">Claw Shop</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">
        <Link className = "noDecorationLink"to="/">Inicio</Link>
        </Nav.Link>
        <Nav.Link href="#link">
          <Link className = "noDecorationLink"to="/Locacion">Locacion</Link>
        </Nav.Link>
        <Nav.Link href="#link">
          <Link className = "noDecorationLink"to="/Tazas">Tazas</Link>
        </Nav.Link>
        <NavDropdown title="Peluches" id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Link className = "noDecorationLink"to="/Shop">Pequeños</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link className = "noDecorationLink" to="/Shop">Medianos</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link className = "noDecorationLink"to="/Shop">King Size</Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
          <Link className = "noDecorationLink"to="/Shop">Peluches Legendarios</Link>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <CartWidget/>
    </Navbar.Collapse>
  </Container>
</Navbar>;
};

export default navbar;
