import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addedItem } from "store/entities/cart";
import styles from "./mainsection.module.scss";

const MainSection = ({ item }) => {
  const [inputValue, setInputValue] = useState(1);

  const { category, name, price, src } = item;

  //Redux
  const dispatch = useDispatch();

  //Add to cart
  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(addedItem({ item: { ...item, amount: inputValue } }));
  };

  return (
    <div className={styles.mainSection}>
      <Row xs={1} sm={1} md={2}>
        <Col>
          <div className="item-image-col">
            <img src={src} alt="" />
          </div>
        </Col>
        <Col>
          <div className="item-body-col">
            <h1>{name}</h1>
            <p>{`$ ${price}`}</p>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
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
              <p>SKU: 030</p>
              <p>CATEGORY: {category}</p>
              <p>
                TAG: <Link to="/shop">Accessories</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MainSection;
