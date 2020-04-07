import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../App.css'
import Login from './Login';

const Menubar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="bg">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">PSU-JoinClub</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/Login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/AboutWeb">About web</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/xkritti">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menubar;