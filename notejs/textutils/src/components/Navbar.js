
import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  console.log("Navbar rendered with props:", props);

  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> {/* Use bg-light to ensure background is visible */}
      <div className="container-fluid">
        {/* Navbar Brand / Title */}
        <a className="navbar-brand" href="/" style={{ color: 'red',backgroundColor: 'yellow', padding: '10px' }}>
          {props.title}
        </a>

        {/* Toggle Button for Responsive View */}
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

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home Link */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" style={{ color: 'black' }}>
                Home
              </a>
            </li>

            {/* About Link */}
            <li className="nav-item">
              <a className="nav-link" href="/" style={{ color: 'blue', backgroundColor: 'pink', padding: '5px'}}>
                {props.aboutText}
              </a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
</div>

          {/* Search Bar */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

// Prop types validation
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// Default props if nothing passed from App.js
Navbar.defaultProps = {
  title: 'Set Title Here',
  aboutText: 'About Text Here',
};
