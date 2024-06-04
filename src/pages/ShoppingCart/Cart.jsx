import React from "react";
import FeatherIcon from "feather-icons-react";
import { motion } from "framer-motion";
import { Col, Container, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removedItem, updatedAmount } from "store/entities/cart";
import {
  containerVariant,
  verticalEntrance,
  noRepeat,
  horizontalEntrance
} from "styles/motion/motionVariants";
import styles from "./cart.module.scss";

function Cart({ cart, removeItem, updateAmount }) {
  const NoItems = () => (
    <div id="cart-no-items">
      <p>Your cart is currently empty.</p>
      <Link to="/shop">
        <button>Return to shop</button>
      </Link>
    </div>
  );

  const handleChangeAmount = (e, item) => {
    const amount = parseInt(e.target.value);
    if (amount > 0)
      return updateAmount({
        id: item.id,
        amount
      });
  };

  return (
    <motion.div
      variants={containerVariant}
      whileInView="visible"
      initial="hidden"
      viewport={noRepeat}
      className={styles.shoppingCart}
    >
      <div id="cart-title-background" />
      <Container>
        <motion.h1 variants={horizontalEntrance}>Your cart</motion.h1>

        {cart.items.length ? (
          <>
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
                {cart.items.map((item) => (
                  <tr key={item.id}>
                    <td id="product-cell">
                      <FeatherIcon
                        icon="x"
                        onClick={() => removeItem({ id: item.id })}
                      />
                      <img src={item.src} alt="Woode furniture" />
                      <p>{item.name}</p>
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <input
                        min={1}
                        type="number"
                        defaultValue={item.amount}
                        onChange={(e) => handleChangeAmount(e, item)}
                        data-testid="cart_amount_input"
                      />
                    </td>
                    <td>${item.price * item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div id="cart-total">
              <h4>Cart totals</h4>
              <div id="cart-total-box">
                <Row className="align-items-center">
                  <Col>
                    <p className="cart-total-titles">SUBTOTAL</p>
                  </Col>
                  <Col>
                    <p>${cart.totalPrice}</p>
                  </Col>
                </Row>
                <hr />
                <Row className="align-items-center">
                  <Col>
                    <p className="cart-total-titles">SHIPPING</p>
                  </Col>
                  <Col>
                    <Form>
                      <Form.Check
                        type="radio"
                        label="Free shipping"
                        name="form-shipping-radio"
                        id="form-freeShipping"
                        defaultChecked
                      />
                      <Form.Check
                        type="radio"
                        label="Flat rate"
                        name="form-shipping-radio"
                        id="form-freeRate"
                      />
                      <Form.Check
                        type="radio"
                        label="Local pickup"
                        name="form-shipping-radio"
                        id="form-local"
                      />
                    </Form>
                  </Col>
                </Row>
                <hr />
                <Row className="align-items-center">
                  <Col>
                    <p className="cart-total-titles">TOTAL</p>
                  </Col>
                  <Col>
                    <p data-testid="cart_total">${cart.totalPrice}</p>
                  </Col>
                </Row>
              </div>

              <button id="checkout-button">
                <Link to="/checkout">Proceed to checkout</Link>
              </button>
            </div>
          </>
        ) : (
          <NoItems />
        )}
      </Container>
    </motion.div>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.entities.cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (obj) => dispatch(removedItem(obj)),
    updateAmount: (obj) => dispatch(updatedAmount(obj))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
