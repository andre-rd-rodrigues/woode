import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { addItemThunk } from "store/thunks/cart.thunks";
import styles from "./mainsection.module.scss";

const MainSection = ({ item, addItem }) => {
  const [inputValue, setInputValue] = useState(1);

  const { category, name, description, pricing, images_url, additional_info } =
    item || {};
  const { base_price, discount, total_price } = pricing || {};
  const { sku } = additional_info || {};

  const discountAmount = discount?.amount; // percentage

  //Add to cart
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ productId: item.id, quantity: inputValue });
  };

  return (
    <div className={styles.mainSection}>
      <Row xs={1} sm={1} md={2}>
        <Col>
          <div className="item-image-col">
            <img src={images_url[0]} alt={name} />
          </div>
        </Col>
        <Col>
          <div className="item-body-col">
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
            <p>{description}</p>
            <form onSubmit={handleSubmit} className="item-actions">
              <input
                min={1}
                max={10}
                required
                type="number"
                defaultValue={inputValue}
                onChange={(e) => setInputValue(parseInt(e.target.value))}
              />
              <button type="submit">Add to cart</button>
            </form>
            <div className="item-additional-info">
              <p>SKU: {sku}</p>
              <p>CATEGORY: {category}</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItemThunk(item))
  };
};
export default connect(null, mapDispatchToProps)(MainSection);
