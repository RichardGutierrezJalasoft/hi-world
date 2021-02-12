import React from 'react'
import Table from 'react-bootstrap/Table';

const UsertList = ({ title, description, list, defaultDescription }) => {
  return <>
    {
      Boolean(!list?.length) ?
        <h1>{defaultDescription}</h1>
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
                    <td>{user.greeting}</td>
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
