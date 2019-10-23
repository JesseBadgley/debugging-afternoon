import React, { Component } from 'react';
import './NavBar.css';
import logo from './dev-mountain-logo.png';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="navbar-container">
          <div className="logo-container">
            <img className="logo-image" src={logo} alt="" />
          </div>

          <div className="navbar-links-container">
            <ul className="navbar-links">
              <li onClick={() => this.props.navigate('store')}>Store</li>
              <li onClick={() => this.props.navigate('cart')}>Shopping Cart</li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default NavBar;