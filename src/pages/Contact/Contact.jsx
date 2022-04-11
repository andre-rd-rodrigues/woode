import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { fireNotification } from "store/ui/notifications";
import styles from "./contact.module.scss";
import ContactInfoRow from "./ContactInfoRow";

const Contact = ({ fireNotification }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fireNotification({
      message: "Message sent successfully! Our team will get to you soon :)"
    });
  };

  return (
    <div className={styles.contact}>
      <h1>Contact us</h1>
      <Container>
        <Row>
          <Col className="contact_first_layer_col">
            <form onSubmit={handleSubmit}>
              <textarea
                data-testid="contact_textarea"
                required
                name="contact_textarea"
                cols="30"
                rows="10"
              />
              <Row>
                <Col>
                  <input required type="text" placeholder="Your Name" />
                </Col>
                <Col>
                  <input required type="email" placeholder="Your Email" />
                </Col>
              </Row>
              <button type="submit">Submit</button>
            </form>
          </Col>
          <Col className="contact_first_layer_col">
            <h2>Send us a message</h2>
            <p>
              Lorem ipsum dolor sit amet, comp uting of ore et dolore ma antemo
              enim. Quam quisq ue id diam.
            </p>
            <div>
              <ContactInfoRow text="woode@example.com" icon="mail" />
              <ContactInfoRow
                text="Mäster Samuelsgatan 10A, Finland"
                icon="home"
              />
              <ContactInfoRow text="+ 668 66 448 6452 99" icon="headphones" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    fireNotification: (obj) => dispatch(fireNotification(obj))
  };
};

export default connect(null, mapDispatchToProps)(Contact);
