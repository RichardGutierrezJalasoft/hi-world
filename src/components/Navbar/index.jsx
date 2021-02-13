import React from 'react'
import { Navbar } from 'react-bootstrap';
import ListButton from '../ListButton';
import { BsChatSquareDots } from "react-icons/bs";
import PropTypes from 'prop-types';
import './style.css';

/**
 * Bootrap UI element for NavBar app
 * @param  {languagesp[]} languages list the object languaje
 * @param  {function} changeLanguage function called when change of the language
 * @param  {string} title the text title app
*/
const NavbarApp = ({ languages, changeLanguage, title }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" className="appTitle">
        {title} < BsChatSquareDots className="logo" />
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

NavbarApp.prototype = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      language: PropTypes.string
    })
  ),
  changeLanguage: PropTypes.func,
  title: PropTypes.string,
};

NavbarApp.propDefaults = {
  languages: [],
  changeLanguage: () => { },
  title: '',
};

export default NavbarApp;
