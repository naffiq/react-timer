import React from 'react';
import {Link, IndexLink} from 'react-router';

var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu">
          <li className="menu-text">React Timer App</li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="countdown" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>

      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a className="credits-link" href="https://github.com/naffiq" target="_blank">naffiq</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Nav;
