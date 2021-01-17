import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand" href="#">
      <img src="https://i.ibb.co/jv43HwR/Group-33072.png" alt=""/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
      <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Product</a>
      <a className="nav-item nav-link" href="#">About us</a>
      <a className="nav-item nav-link" href="#">Contact us</a>
    </div>
  </div>
</nav>
</div>
    );
};

export default Navbar;