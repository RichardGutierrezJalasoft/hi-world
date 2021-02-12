import React from 'react'
import ListButton from '../ListButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const languages =
    [{
      language: 'English',
    },
    {
      language: 'Spanish'
    }]
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Hi World</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <ListButton values={languages} />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
