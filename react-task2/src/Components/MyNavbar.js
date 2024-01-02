import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";

export default function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">
          AlbumsApp
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              {/* <NavLink tag={Link} to="/Posts">Posts</NavLink> */}
              {/* <Link to="/Posts">Posts</Link> */}
              <Link to="/" className="nav-link">
                Albums
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Posts" className="nav-link">
                Posts
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>React App</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
