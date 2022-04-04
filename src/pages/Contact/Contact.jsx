import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactInfoRow from "./ContactInfoRow";
import styles from "./contact.module.scss";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submited!");
  };
  return (
    <div className={styles.contact}>
      <h1>Contact us</h1>
      <Container>
        <Row>
          <Col className="contact_first_layer_col">
            <form onSubmit={handleSubmit}>
              <textarea name="" id="" cols="30" rows="10" />
              <Row>
                <Col>
                  <input
                    required
                    aria-required
                    type="text"
                    placeholder="Your Name"
                  />
                </Col>
                <Col>
                  <input
                    required
                    aria-required
                    type="email"
                    placeholder="Your Email"
                  />
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

export default Contact;
