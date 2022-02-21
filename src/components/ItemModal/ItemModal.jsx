import React from "react";
import { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import styles from "./itemmodal.module.scss";

function ItemModal({ item, show, onClose }) {
  const [amount, setAmount] = useState(1);

  const { category, name, price, src } = item;

  return (
    <Modal
      centered
      size="lg"
      show={show}
      onHide={onClose}
      className={styles.itemModal}
    >
      <Row sm={1} md={2}>
        <Col>
          <div
            className="item-modal-image-col"
            style={{ backgroundImage: `url(${src})` }}
          />
        </Col>
        <Col>
          <div className="item-modal-body-col">
            <h1>{name}</h1>
            <p>{`$ ${price}`}</p>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <div className="item-modal-actions">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button>Add to cart</button>
            </div>
            <div className="item-modal-additional-info">
              <p>SKU: 030</p>
              <p>CATEGORY: {category}</p>
              <p>
                TAG: <a href="#">Accessories</a>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Modal>
  );
}

export default ItemModal;
