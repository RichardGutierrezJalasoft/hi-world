import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import { getGreetingText } from '../../helpers/tools'
import { FcLinux } from "react-icons/fc";
import './style.css';

/**
 * Bootrap UI element list user and greetings
 * @param  {string} title table title
 * @param  {string} description reference to greeting by user
 * @param  {user[]} list list user object
 * @param  {string} defaultDescription description when do not get list users
 * @param  {greeting[]} greeting list greeting to language
 */

const UsertList = ({ title, description, list, defaultDescription, greeting }) => {
  return <>
    {
      Boolean(!list?.length) ?
        <h2 className='text-center pt-5'>{defaultDescription} <FcLinux className="upps" /></h2>
        : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Code</th>
                <th>{title}</th>
                <th>{description}</th>
              </tr>
            </thead>
            <tbody>
              {
                list.map((user, index) =>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{getGreetingText(user.message, greeting)}</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        )
    }
  </>
}

UsertList.prototype = {
  title: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.array,
  defaultDescription: PropTypes.string,
  greeting: PropTypes.array,
};

UsertList.propDefaults = {
  title: '',
  description: '',
  list: [],
  defaultDescription: '',
  greeting: [],
};

export default UsertList;
