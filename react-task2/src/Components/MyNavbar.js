import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

export default function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      {/* <Navbar {...args}> */}
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Albums</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/Posts">Posts</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>React App</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
