import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "assets/images/logo.png";
import FeatherIcon from "feather-icons-react";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function AppNavbar({ cart }) {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(cart.amount);
  }, [cart]);
  return (
    <Navbar expand="lg" fixed="top" className={styles.navbar}>
      <Container>
        <Navbar.Brand as={Link} href="/home" to="/home">
          <img src={logo} alt="Woode Furniture" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="collapsable-navbar" />
        <Navbar.Collapse id="collapsable-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/home" to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/aboutUs" to="/aboutUs">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} href="/locations" to="/locations">
              Locations
            </Nav.Link>
            <Nav.Link as={Link} href="/shop" to="/shop">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} href="/contact" to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link as={Link} href="/shoppingCart" to="/shoppingCart">
          Cart <FeatherIcon icon="shopping-bag" /> {amount}
        </Nav.Link>
        <Nav.Link as={Link} href="/login" to="/login">
          <FeatherIcon icon="user" /> Login
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.entities.cart };
};

export default connect(mapStateToProps)(AppNavbar);