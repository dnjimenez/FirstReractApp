import { Container, Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const NavbarReactLink = ({internalLink, tabName}) => {
    return <Nav.Link href="#link" className='customNavbarColor'>
        <Link className = "noDecorationLink customNavbarColor"to={internalLink}>{tabName}</Link>
    </Nav.Link>
};
export default NavbarReactLink;