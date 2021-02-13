import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

/**
 * Bootrap UI element for a list Button to Nav
 * @param  {languagesp[]} values list the object languaje
 * @param  {function} action function called when change of the language
*/

const ListButton = ({ values, action }) => {
  const [{ language: defaultTitle }] = values;
  return (
    <Nav className="navbar-nav  ml-auto">
      <NavDropdown title={defaultTitle} id="basic-nav-dropdown">
        {
          Boolean(values) && values.map((value) =>
          (
            <NavDropdown.Item
              id={value}
              key={value.language}
              className={value}
              onClick={(e) => action(value.code, e)}>
              {value.language}
            </NavDropdown.Item>
          )
          )
        }
      </NavDropdown>
    </Nav>
  )
}

ListButton.prototype = {
  values: PropTypes.array,
  action: PropTypes.func,
};

ListButton.propDefaults = {
  values: [],
  action: () => { },
};

export default ListButton;
