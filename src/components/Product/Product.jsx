import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addedItem } from "store/entities/cart";
import FeatherIcon from "feather-icons-react";
import styles from "./product.module.scss";

function Product({ item, changeItemModal, changeCurrentItemSelected, size }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.product}>
      <div id="productImageDiv">
        <img src={item.src} alt="Woode product" style={{ width: 100 * size }} />
        <div id="productHoverDiv">
          <Link to={`/shoppingItem:${item.id}`} state={{ item }} />
          <FeatherIcon
            icon="shopping-bag"
            onClick={() =>
              dispatch(addedItem({ item: { ...item, amount: 1 } }))
            }
          />
          <FeatherIcon
            icon="search"
            onClick={() => {
              changeCurrentItemSelected(item);
              changeItemModal(true);
            }}
          />
        </div>
      </div>
      <div id="productDiv">
        <h5>{item.name}</h5>
        <p>$ {item.price}</p>
      </div>
      <p id="productCategory">{item.category.toUpperCase()}</p>
    </div>
  );
}

export default Product;
