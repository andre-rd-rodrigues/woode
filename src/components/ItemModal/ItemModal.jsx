import { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addItemThunk, selectCartState } from "store/entities/cart";
import styles from "./itemmodal.module.scss";

function ItemModal({ item, show, onClose, addItem, isLoading }) {
  const [amount, setAmount] = useState(1);

  const { category, name, description, pricing, images_url } = item || {};
  const { base_price, discount, total_price } = pricing || {};
  const discountAmount = discount?.amount; // percentage

  // Add item to cart
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ productId: item.id, quantity: amount });
  };

  return (
    <Modal
      centered
      size="xl"
      show={show}
      onHide={onClose}
      className={styles.itemModal}
    >
      {item && (
        <Row sm={1} md={2}>
          <Col>
            <div
              className="item-modal-image-col"
              style={{ backgroundImage: `url(${images_url[0]})` }}
            />
          </Col>
          <Col>
            <div className="item-modal-body-col">
              <h1>{name}</h1>
              <div className={styles.pricing}>
                <span
                  className={
                    discountAmount
                      ? styles.basePriceWithDiscount
                      : styles.basePrice
                  }
                >{`${base_price} €`}</span>
                {!!discountAmount && (
                  <>
                    <span className={styles.discount}>
                      {`-${discountAmount}%`}
                    </span>
                    <span className={styles.totalPrice}>
                      {`${total_price} €`}
                    </span>
                  </>
                )}
              </div>
              <hr />
              <p className={styles.description}>{description}</p>
              <form onSubmit={handleSubmit} className="item-modal-actions">
                <input
                  type="number"
                  value={amount}
                  min={1}
                  max={10}
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                  disabled={isLoading}
                />
                <button type="submit" disabled={isLoading}>
                  Add to cart
                </button>
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
      )}
    </Modal>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItemThunk(item))
  };
};

const mapStateToProps = (state) => {
  return {
    cart: selectCartState(state).cart,
    isLoading: selectCartState(state).isLoading,
    error: selectCartState(state).error,
    isSuccess: selectCartState(state).isSuccess
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);
