import { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";

class Navigation extends Component {
  state = {
    isNavOpen: false,
  };
  NavOpen = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <Navbar color="dark" container dark expand="sm" fixed="top" light>
          <NavLink to="/" className="navbar-brand">
            Restaurant
          </NavLink>
          <NavbarToggler onClick={this.NavOpen} />
          <Collapse navbar isOpen={this.state.isNavOpen}>
            <Nav className="nav-auto" navbar>
              <NavItem>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
