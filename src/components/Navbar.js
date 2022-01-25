import React from 'react';
import { Container, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const navbar = () => {
  return <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Claw Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Locacion</Nav.Link>
        <Nav.Link href="#link">Tazas</Nav.Link>
        <NavDropdown title="Peluches" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Pequeños</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Medianos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">King Size</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Peluches Legendarios</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>;
};

export default navbar;
