import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addedItem } from "store/entities/cart";
import styles from "./itemmodal.module.scss";
import { useCart } from "hooks/useCart";

function ItemModal({ item, show, onClose }) {
  const [amount, setAmount] = useState(1);
  const { addItem } = useCart();

  const { category, name, price, src } = item;

  //Redux
  const dispatch = useDispatch();

  //Add to cart
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ productId: item.id, quantity: amount });

    return dispatch(addedItem({ item: { ...item, amount } }));
  };

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
            <form onSubmit={handleSubmit} className="item-modal-actions">
              <input
                type="number"
                value={amount}
                min={1}
                max={10}
                onChange={(e) => setAmount(parseInt(e.target.value))}
              />
              <button type="submit">Add to cart</button>
            </form>
            <div className="item-modal-additional-info">
              <p>SKU: 030</p>
              <p>CATEGORY: {category}</p>
              <p>
                TAG: <Link to="/shop">Accessories</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Modal>
  );
}

export default ItemModal;
