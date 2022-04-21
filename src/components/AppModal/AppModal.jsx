import React from "react";
import success from "assets/lotties/success";
import LottieAnimation from "components/LottieAnimation/LottieAnimation";
import { Modal } from "react-bootstrap";
import styles from "./appmodal.module.scss";

const AppModal = ({ show = false, onHide, type = "default" }) => {
  switch (type) {
    case "default":
      return (
        <Modal className={styles.appmodal} show={show} onHide={onHide}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Woohoo, you&apos;re reading this text in a modal!</p>
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={onHide}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      );
    case "checkout_success":
      return (
        <Modal className={styles.appModalSuccess} show={show} onHide={onHide}>
          <Modal.Header>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LottieAnimation lottie={success} />
            <p>
              Thank you for your order! <br />
              You will soon receive an email with all updates.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={onHide}>Got it!</button>
          </Modal.Footer>
        </Modal>
      );
    default:
      return null;
  }
};

export default AppModal;
