import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(prop) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`} >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {prop.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active" to="/about">
                {prop.aboutText}
              </Link>
            </li>
          </ul>
          <div className="bg-primary rounded mx-2" onClick={() => { prop.toggleMode('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
          <div className="bg-danger rounded mx-2" onClick={() => { prop.toggleMode('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
          <div className="bg-success rounded mx-2" onClick={() => { prop.toggleMode('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
          <div className="bg-warning rounded mx-2" onClick={() => { prop.toggleMode('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
          <div className="bg-dark rounded mx-2" onClick={() => { prop.toggleMode('dark') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
          <div className="bg-light rounded mx-2" onClick={() => { prop.toggleMode('light') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// Navbar.defaultProps = {
//   title: 'Set Title here',
//   aboutText: 'Set About Us here',
// };
