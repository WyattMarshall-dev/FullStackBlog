import { Link } from 'react-router-dom';
import React from 'react';


const Footer = () => {
    return (
        <footer className="footer row mt-4 py-3 bg-dark">
        <div className="container">
          <div className="row text-center justify-content-between">
            <div className="col-lg-3 text-light d-flex flex-row justify-content-around foot-list">
              <ul className="list-unstyled">
              <Link to="/" className="admin-link text-white text-decoration-none">
                <li className="list-group-flush btn btn-secondary  rounded mt-2 w-100">
                Home
                </li>
                </Link>
                <Link to="/about" className="admin-link text-white text-decoration-none">
                <li className="list-group-flush btn btn-secondary  rounded mt-2 w-100">
                About
                </li>
                </Link>
                <Link to="/blog" className="admin-link text-white text-decoration-none">
                <li className="list-group-flush btn btn-secondary  rounded mt-2 w-100">
                Blog
                </li>
                </Link>
              </ul>
            </div>
            <div className="col-lg-3 logo-foot mt-4 mb-4 d-flex justify-content-around foot-logo">
              <img src={process.env.PUBLIC_URL + 'JmoSnowDecor.svg'} width="auto" alt=""/>
            </div>
            
            <div className="col-lg-3 text-light mt-4 mb-4 d-flex justify-content-around">
              <ul className="list-unstyled d-flex justify-content-around">
                <li className="list-group-flush m-2">
                  <a className="text-decoration-none text-light" href="https://www.instagram.com"><i className="display-4 fab fa-instagram"></i></a>
                </li>
                <li className="list-group-flush m-2">
                <a className="text-decoration-none text-light" href="https://www.facebook.com"><i className="display-4 fab fa-facebook-square"></i></a>
                </li>
                <li className="list-group-flush m-2">
                <a className="text-decoration-none text-light" href="https://www.youtube.com"><i className="display-4 fab fa-youtube"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row w-100 d-flex flex-row justify-content-around g-2">
            <p className="text-light p-2 w-auto">&copy; 2021 - wyattmarshall.dev</p>
            <p className="text-muted p-2 w-auto">Design by <a href="https://www.wyattmarshall.dev">Wyatt Marshall</a></p>
          </div>
        </div>


        <div className="text-center foot-login mb-0 p-4">
          <Link to="/login" className="admin-link text-decoration-none text-muted w-auto h-auto text-end">Admin Login</Link>
        </div>
          

        </footer>
    );
}
 
export default Footer;