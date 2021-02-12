import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const ListButton = ({ values, action }) => {
  const [{ language: defaultTitle }] = values;
  return (
    <Dropdown >
      <Dropdown.Toggle variant="info" id="dropdown-basic">
        {defaultTitle}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
          Boolean(values) && values.map((value) =>
          (
            <Dropdown.Item
              id={value}
              key={value.language}
              className={value}
              onClick={() => action()}>
              {value.language}
            </Dropdown.Item>
          )
          )
        }

      </Dropdown.Menu>
    </Dropdown >
  )
}

export default ListButton
