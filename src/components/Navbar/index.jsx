import React from 'react'
import { Navbar } from 'react-bootstrap';
import ListButton from '../ListButton';
import { BsChatSquareDots } from "react-icons/bs";
import './style.css';

const NavbarApp = ({ languages, changeLanguage, title }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" className="appTitle">
        {title } < BsChatSquareDots className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ListButton
          values={languages}
          action={changeLanguage}
        />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarApp;
