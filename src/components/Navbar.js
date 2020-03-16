import React, {useState} from 'react';
import {Menu} from 'react-feather';
import SideNav from './SideNav';

const Navbar = (props) => {

  const [expanded,
    setExpanded] = useState(false);

  function openNav() {
    setExpanded(true);
  }
  const closeNav = () => {
    setExpanded(false);
  }

  return (
    <React.Fragment>
      <SideNav expanded={expanded} close={() => closeNav}/>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light static-top mob"
        style={{
        padding: 0
      }}>
        <div className="container bg-logo mobile-nav">
          <div className="row d-flex justify-content-between">
            <div className="col-8 col-sm-8">
              <button
                className="navbar-toggler border-0 d-flex justify-content-between text-white"
                onClick={() => openNav()}
                type="button"
                data-toggle="collapse"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <Menu/>
                <span>Menu</span>
              </button>
            </div>
            <div className="col-8 col-sm-8">
              <img
                className="d-sm-block d-md-none"
                src={require('../img/logo-small.png')}
                alt=""/>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Lorem ipsum
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item mx-2">
                <a href="#" className="btn btn-primary px-4 btn-sm mt-1">Lorem Ipsum</a>
              </li>
              <li className="nav-item">
                <a href="#" className="btn btn-primary px-4 btn-sm mt-1">Lorem Ipsum</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
};
export default Navbar;