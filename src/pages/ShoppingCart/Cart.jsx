import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import styles from "./cart.module.scss";
function Cart() {
  return (
    <div className={styles.shoppingCart}>
      <h1>Your cart:</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img2.jpg"
                  alt=""
                />{" "}
                <p>Coffe Thermos</p>
              </td>
              <td>$40.00</td>
              <td>
                <input type="number" value={1} />
              </td>
              <td>$120.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h4>Cart totals</h4>
        <Row>
          <Col>
            <p>SUBTOTAL</p>
          </Col>
          <Col>
            <p>$164.00</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p>SHIPPING</p>
          </Col>
          <Col>
            <Form.Check type="radio" label="Free shipping" />
            <Form.Check type="radio" label="Flat rate" />
            <Form.Check type="radio" label="Local pickup" />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p>Total</p>
          </Col>
          <Col>
            <p> $164.00</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Cart;
