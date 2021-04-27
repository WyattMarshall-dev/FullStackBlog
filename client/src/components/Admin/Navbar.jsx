// import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { }
}


  async handleClick() {
    await fetch('/api/logout', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        credentials: 'include'
    }).then(() => {window.location.reload()})

    const cookies = new Cookies();
    cookies.remove('mycat', { path: '/'});
  }

  render() {

    return (
      <header className="px-3 py-2 bg-secondary text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="d-flex align-items-center my-lg-0 me-lg-auto text-white text-decoration-none">
            <img className="" src={process.env.PUBLIC_URL + 'Logo.svg'} alt=""/>
            </Link>
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link to="/" className="btn nav-link text-white text-center">
                <p className="text-center display-6 "><i className="fas fa-home"></i></p>
                  Home
                </Link>
              </li>
              {/* <li>
                <Link to="/" className="nav-link text-white text-center">
                <p className="text-center display-6 "><i className="fas fa-tachometer-alt"></i></p>
                  Dashboard
                </Link>
              </li> */}
              <li>
                <Link to="/admin" className="btn nav-link text-white text-center" onClick={() => this.props.handleClick(new Date(Date.now()))}>
                <p className="text-center display-6 "><i className="far fa-newspaper"></i></p>
                  Posts
                </Link>
              </li>
              <li>
                <Link to="/admin/newpost" className="btn nav-link text-white text-center">
                <p className="text-center display-6 "><i className="far fa-plus-square"></i></p>
                  New Post
                </Link>
              </li>
              <li>
                <Link to="/" className="btn nav-link text-white text-center" onClick={this.handleClick}>
                <p className="text-center display-6 "><i className="fas fa-sign-out-alt"></i></p>
                  Logout
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
 
export default Navbar;
