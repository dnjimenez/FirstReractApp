import React,{ useContext } from 'react';
import { Container, Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget';
import './Navbar.css';


//NavbarComponents Imports
import NavbarReactDropdownItem from './NavbarReactDropdownItem'
import NavbarReactLink from './NavbarReactLink'

//context
import { ItemsContext } from '../../providers/ItemProvider'


const NavBar = () => {
  const [items, setItems, addItem,removeItem, clearCart, isInCart, getTotalItemQuantity] = useContext(ItemsContext);//Context para chequeo de cart

  return <Navbar bg="light" expand="lg">
  <Container className='customNavbarColor'>
    <Navbar.Brand href="#home" className='customNavbarColor'>
      {/* TODO: Mejorar esto, esta levantando un warning */}
      <Link className = "noDecorationLink customNavbarColor"to="/">Claw Shop</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className='customNavbarColor'>
      <Nav className="me-auto customNavbarColor">
        <NavbarReactLink internalLink="/" tabName='Inicio'/>
        <NavbarReactLink internalLink="/Locacion" tabName='Locacion'/>
        <NavbarReactLink internalLink="/Tazas" tabName='Tazas'/>
        <NavDropdown title="Peluches" id="basic-nav-dropdown" className='customNavbarColor'>
          <NavbarReactDropdownItem internalLink="/Shop" tabName='Pequeños'/>
          <NavbarReactDropdownItem internalLink="/Shop2" tabName='Medianos'/>
          <NavbarReactDropdownItem internalLink="/Shop3" tabName='King Size'/>
          <NavDropdown.Divider />
          <NavbarReactDropdownItem internalLink="/Shop4" tabName='Peluches Legendarios'/>
        </NavDropdown>
      </Nav>
      {items.cantidadTotal>0 &&
        <Link to="/Cart" className='noDecorationLink leftSideNavbarElement'>
          <CartWidget/>
        </Link>
      }
    </Navbar.Collapse>
  </Container>
</Navbar>;
};

export default NavBar;
