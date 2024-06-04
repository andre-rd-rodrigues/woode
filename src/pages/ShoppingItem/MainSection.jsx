import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { addedItem } from "store/entities/cart";
import styles from "./mainsection.module.scss";

const MainSection = ({ item, addItemToCart }) => {
  const [inputValue, setInputValue] = useState(1);

  const { category, name, description, pricing, images_url, additional_info } =
    item || {};
  const { base_price, discount, total_price } = pricing || {};
  const { sku } = additional_info || {};

  const discountAmount = discount?.amount; // percentage

  //Add to cart
  const handleSubmit = (e) => {
    e.preventDefault();
    return addItemToCart(item, inputValue);
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
                    {`${total_price.toFixed(2)} €`}
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
    addItemToCart: (item, inputValue) =>
      dispatch(addedItem({ item: { ...item, amount: inputValue } }))
  };
};
export default connect(null, mapDispatchToProps)(MainSection);
