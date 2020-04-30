import React, { useState, useEffect } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../App.css'
import { bindActionCreators } from 'redux';
import { listAction } from './redux/ReduxClub'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Menubar(props) {

  const Action = bindActionCreators(listAction, useDispatch())
  const login = useSelector(state => state.login)
  const history = useHistory()
  const [Idpsupass, setIdpsupass] = useState(null)

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logouts = () => {
    localStorage.removeItem('IDuserpassport')
    localStorage.removeItem('Nameuser')
    localStorage.removeItem('userpassport')
    localStorage.removeItem('Admin')
    let user = undefined
    setIdpsupass(user)
    Action.logout()
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }

  useEffect(() => {
    let user = localStorage.getItem('IDuserpassport');
    setIdpsupass(user)
    if (user == null || undefined) {
      history.push('/')
    }
  }, [Idpsupass])

  return (
    <div className="bg">
      <Navbar color="fead" dark>
        <NavbarBrand href="/title" >
          <div style={{ height: "45px", backgroundColor: 'rgba(240, 240, 240, 0.4)', display: "flex", alignItems: "center", borderRadius: "10px", borderStyle: "dotted", paddingRight: "10px" }}>
            <img style={{ width: "80px", marginRight: "10px" }} src="https://psubrand.psu.ac.th/downloads/aa3482aca115c9dc016b057e55408e8f.png" />
            <a className="rainbow-text" style={{ fontSize: "x-large" }}>PSU-JoinClub</a>
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
            <NavItem style={{ marginLeft: "10px" }}>
              <NavLink href="/Profile">{Idpsupass}</NavLink>
            </NavItem>
            {/* <NavItem style={{ marginLeft: "10px" }}>
              <NavLink href="/AboutWeb">About web</NavLink>
            </NavItem> */}
            <NavItem style={{ marginLeft: "10px" }}>
              <NavLink href="https://github.com/xkritti">GitHub</NavLink>
            </NavItem>
            <NavItem style={{ marginLeft: "10px" }}>
              <Button color="danger" size="sm" onClick={logouts}>Logout</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menubar;