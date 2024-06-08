import logo from "assets/images/logo.png";
import FeatherIcon from "feather-icons-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "store/entities/auth";
import { verticalEntrance } from "styles/motion/motionVariants";
import styles from "./navbar.module.scss";

function AppNavbar({ cart, user, logout }) {
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
    window.location.reload();
  };

  useEffect(() => {
    setAmount(cart.amount);
  }, [cart]);

  return (
    <motion.nav
      className={`${styles.navbar} navbar navbar-expand-lg navbar-light fixed-top`}
      variants={verticalEntrance}
      initial="hidden"
      animate="visible"
    >
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
        <Nav.Link as={Link} href="/cart" to="/cart">
          Cart <FeatherIcon icon="shopping-bag" /> {amount}
        </Nav.Link>
        {!user.isAuthenticated && (
          <Nav.Link as={Link} href="/login" to="/login">
            Login <FeatherIcon icon="user" />
          </Nav.Link>
        )}
        {user.isAuthenticated && (
          <Dropdown className={styles.dropdown}>
            <Dropdown.Toggle as={Nav.Link}>
              {user.name} <FeatherIcon icon="user" />
            </Dropdown.Toggle>
            <Dropdown.Menu className={styles.dropdownMenu}>
              <Dropdown.Item onClick={handleLogout}>
                <FeatherIcon icon="log-out" size={20} /> Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Container>
    </motion.nav>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.entities.cart,
    user: {
      isAuthenticated: state.entities.auth.isAuthenticated,
      name: state.entities.auth.user?.name
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavbar);
