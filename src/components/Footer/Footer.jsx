import React from "react";
import logo from "assets/images/logo.png";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <hr className="mb-5" />
      <Row>
        <Col>
          <img src={logo} alt="Woode Furniture" />
          <h5>Woode</h5>
          <p>
            Welcome to a place of refinement and beauty. This is Woode, a
            furniture e-commerce store, where elegance and sustainability meet.
          </p>
        </Col>
        <Col>
          <h5>Studio</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">About us</a>
            </li>
            <li>
              <a href="#!">Shopping</a>
            </li>
          </ul>
        </Col>
        <Col>
          <h5>Shopping</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Products</a>
            </li>
            <li>
              <a href="#!">Gift Cards</a>
            </li>
            <li>
              <a href="#!">Return policy</a>
            </li>
          </ul>
        </Col>
        <Col>
          <h5>Payment Methods</h5>
          <p>
            Select one of many supported payment providers from the list below.
          </p>
          <img
            id="footer-payment-methods"
            src="https://umea.qodeinteractive.com/wp-content/uploads/2021/03/footer-logo-group.png"
            alt="Woode payment methods"
          />
        </Col>
      </Row>
    </Container>

    <div className="text-center py-3" id="footer-copyright">
      © 2020{" "}
      <a href="https://andre-rd-rodrigues.github.io/portfolio/" target="_">
        {" "}
        André Rodrigues
      </a>{" "}
      | All Rights Reserved
    </div>
  </footer>
);

export default Footer;
