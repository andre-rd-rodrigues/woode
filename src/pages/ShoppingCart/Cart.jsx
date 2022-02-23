import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import { connect } from "react-redux";
import styles from "./cart.module.scss";
import { useDispatch } from "react-redux";
import { removedItem, updatedAmount } from "store/entities/cart";
import { Link } from "react-router-dom";

function Cart({ cart }) {
  const dispatch = useDispatch();

  const NoItems = () => (
    <div id="cart-no-items">
      <p>Your cart is currently empty.</p>
      <Link to="/home">
        <button>Return to shop</button>
      </Link>
    </div>
  );

  const handleChangeAmount = (e, item) => {
    const amount = parseInt(e.target.value);
    if (amount > 0)
      return dispatch(
        updatedAmount({
          id: item.id,
          amount
        })
      );
  };
  return (
    <div className={styles.shoppingCart}>
      <div id="cart-title-background" />
      <Container>
        <h1>Your cart</h1>

        {cart.items.length > 0 ? (
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
                  <tr>
                    <td id="product-cell">
                      <FeatherIcon
                        icon="x"
                        onClick={() => dispatch(removedItem({ id: item.id }))}
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
                    <p>${cart.totalPrice}</p>
                  </Col>
                </Row>
              </div>

              <button id="checkout-button">Proceed to checkout</button>
            </div>
          </>
        ) : (
          <NoItems />
        )}
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.entities.cart };
};

export default connect(mapStateToProps)(Cart);
