import React, { useEffect, useState } from "react";
import AppModal from "components/AppModal/AppModal";
import AppLoader from "components/Loading/Loading";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Radio, RadioGroup } from "react-radio-group";
import { connect } from "react-redux";
import styles from "./checkout.module.scss";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart }) => {
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Direct bank transfer");
  const [modalShow, setModalShow] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setModalShow(true);
      setLoading(false);
    }, 1000);
  };

  const closeModal = () => {
    setModalShow(false);
    navigate(`/shop`);
    return window.location.reload();
  };

  useEffect(() => {
    if (modalShow) return setTimeout(() => closeModal(), 4000);
  }, [modalShow]);

  return (
    <div className={styles.checkout}>
      <div className={styles.jumbotron}>
        <h1>Checkout</h1>
      </div>

      {loading && <AppLoader loading={loading} />}
      <Container>
        <h2>Billing details</h2>
        {/*   Form */}
        <form className={styles.billingAddressForm} onSubmit={handleSubmit}>
          {/*   Billing details */}
          <Row>
            <Col>
              <label htmlFor="checkout_first_name">FIRST NAME*</label>
              <input
                required
                type="text"
                id="checkout_first_name"
                name="firstname"
              />

              <label htmlFor="checkout_last_name">LAST NAME*</label>
              <input
                required
                type="text"
                id="checkout_last_name"
                name="lastname"
              />

              <label htmlFor="checkout_company">company name (optional)</label>
              <input type="text" id="checkout_company" name="company" />

              <label htmlFor="checkout_company">country / region *</label>
              <select required name="checkout_country" id="checkout_company">
                <option value="portugal">Portugal</option>
                <option value="india">India</option>
              </select>

              <fieldset>
                <legend>street address*</legend>
                <input
                  required
                  type="text"
                  name="checkout_address_1"
                  placeholder="House number and street name"
                />
                <input
                  type="text"
                  name="checkout_address_2"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </fieldset>

              <label htmlFor="checkout_town">town / city*</label>
              <input required type="text" id="checkout_town" />

              <label htmlFor="checkout_email">email address*</label>
              <input required type="email" id="checkout_email" />
            </Col>
            <Col>
              <label htmlFor="checkout_notes">order notes (optional)</label>
              <textarea
                name="checkout_notes"
                id="checkout_notes"
                cols="30"
                rows="10"
                placeholder="Notes about your order, eg. special notes for delivery"
              />
            </Col>
          </Row>
          {/* Order */}
          <div id="checkout-order">
            <h4>Your order</h4>
            <div id="checkout-box">
              <Row className="align-items-center">
                <Col>
                  <p className="checkout-titles">PRODUCT(S)</p>
                </Col>
              </Row>
              {cart.items.map((item) => (
                <Row className="align-items-center" key={item.id}>
                  <Col>
                    <p className="checkout-product-name">
                      {item.name} x {item.amount}
                    </p>
                  </Col>
                  <Col>
                    <p>${cart.totalPrice}</p>
                  </Col>
                </Row>
              ))}
              <hr />
              <Row className="align-items-center">
                <Col>
                  <p className="checkout-titles">SUBTOTAL</p>
                </Col>
                <Col>
                  <p>${cart.totalPrice}</p>
                </Col>
              </Row>
              <hr />
              <Row className="align-items-center">
                <Col>
                  <p className="checkout-titles">SHIPPING</p>
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Free shipping"
                    name="form-shipping-radio"
                    id="form-contact-freeShipping"
                    defaultChecked
                  />
                  <Form.Check
                    type="radio"
                    label="Flat rate"
                    name="form-shipping-radio"
                    id="form-contact-freeRate"
                  />
                  <Form.Check
                    type="radio"
                    label="Local pickup"
                    name="form-shipping-radio"
                    id="form-contact-local"
                  />
                </Col>
              </Row>
              <hr />
              <Row className="align-items-center">
                <Col>
                  <p className="checkout-titles">TOTAL</p>
                </Col>
                <Col>
                  <p data-testid="cart_total">${cart.totalPrice}</p>
                </Col>
              </Row>

              <div id="checkout-payment">
                <RadioGroup
                  name="checkout_payments"
                  selectedValue={selectedValue}
                  onChange={(e) => setSelectedValue(e)}
                  className="form-check"
                >
                  <label htmlFor="Direct bank transfer">
                    Direct bank transfer
                  </label>
                  <Radio
                    className="form-check-input"
                    value="Direct bank transfer"
                    id="Direct bank transfer"
                    checked
                  />
                  <label htmlFor="Check payment">Check payment</label>
                  <Radio
                    value="Check payment"
                    id="Check payment"
                    className="form-check-input"
                  />

                  <label htmlFor="Cash on delivery">Cash on delivery</label>
                  <Radio
                    id="Cash on delivery"
                    value="Cash on delivery"
                    className="form-check-input"
                  />
                </RadioGroup>
              </div>
            </div>
            <p id="checkout-data-security">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
          </div>
          <button id="order-button" type="submit">
            Place order
          </button>
        </form>
      </Container>
      <AppModal show={modalShow} type="checkout_success" onHide={closeModal} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return { cart: state.entities.cart };
};
export default connect(mapStateToProps)(Checkout);
