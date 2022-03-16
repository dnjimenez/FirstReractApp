import { Container, Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const NavbarReactDropdownItem = ({internalLink, tabName}) => {
    return <NavDropdown.Item >
        <Link className = "noDecorationLink navbarReactLink customNavbarColor"to={internalLink}>{tabName}</Link>
    </NavDropdown.Item>
};
export default NavbarReactDropdownItem;