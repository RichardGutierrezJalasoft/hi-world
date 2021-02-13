import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

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

export default ListButton
