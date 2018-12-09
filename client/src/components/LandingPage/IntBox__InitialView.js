import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class IntBox__InitialView extends Component {
  render() {
    return (
      <div>
          <Link to = '/signup'>
            <button>Sign Up</button>
          </Link>
          <Link to = '/login'>
            <button>login</button>
          </Link>
      </div>
    )
  }
}
