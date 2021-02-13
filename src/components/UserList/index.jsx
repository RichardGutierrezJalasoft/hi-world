import React from 'react'
import Table from 'react-bootstrap/Table';
import { getGreetingText } from '../../helpers/tools'
import { FcLinux } from "react-icons/fc";
import './style.css';

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

export default UsertList
