import React, { Component } from 'react';

const divStyle = {
  color: 'black',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-primary bg-primary">

        <div className="container">
          <button type="button" className="btn btn-danger navbar-btn navbar-right">Sign in</button>
          <div className="navbar-header">
            <a style={divStyle} className="navbar-brand" href="/login"> login </a>
            <a style={divStyle} className="navbar-brand" href="/"> Home </a>
            <a style={divStyle} className="navbar-brand" href="/signup">signup</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
