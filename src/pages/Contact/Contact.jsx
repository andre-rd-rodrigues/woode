import React from "react";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { fireNotification } from "store/ui/notifications";
import {
  containerVariant,
  verticalEntrance
} from "styles/motion/motionVariants";
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
    <motion.div
      variants={containerVariant}
      animate="visible"
      initial="hidden"
      className={styles.contact}
    >
      <motion.h1 variants={verticalEntrance}>Contact us</motion.h1>
      <Container>
        <Row>
          <Col className="contact_first_layer_col">
            <motion.form variants={verticalEntrance} onSubmit={handleSubmit}>
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
            </motion.form>
          </Col>
          <Col className="contact_first_layer_col">
            <motion.h2 variants={verticalEntrance}>Send us a message</motion.h2>
            <motion.p variants={verticalEntrance}>
              Lorem ipsum dolor sit amet, comp uting of ore et dolore ma antemo
              enim. Quam quisq ue id diam.
            </motion.p>
            <motion.div variants={verticalEntrance}>
              <ContactInfoRow text="woode@example.com" icon="mail" />
              <ContactInfoRow
                text="Mäster Samuelsgatan 10A, Finland"
                icon="home"
              />
              <ContactInfoRow text="+ 668 66 448 6452 99" icon="headphones" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    fireNotification: (obj) => dispatch(fireNotification(obj))
  };
};

export default connect(null, mapDispatchToProps)(Contact);
