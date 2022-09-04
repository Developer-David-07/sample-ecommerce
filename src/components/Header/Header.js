import React from "react";
import "./Header.css";
import logo from "./../../images/logo.jpg";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#fff" }}>
        <Navbar.Brand href="/">
          <img
            src={require('./../../images/logo.jpg')}
            width="100"
            height="100"
            alt=""
            className="main_logo"
            id="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/review/cart">
              <FontAwesomeIcon icon={faShoppingCart} className='mr-2' />
              cart
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
