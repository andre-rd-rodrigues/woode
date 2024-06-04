import React from "react";
import FeatherIcon from "feather-icons-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addedItem } from "store/entities/cart";
import styles from "./product.module.scss";
import { useCart } from "hooks/useCart";

function Product({ item, onChangeItemSelected, size }) {
  const { addItem } = useCart();

  const discount = item.pricing.discount.amount;

  return (
    <div className={styles.product}>
      <div id="productImageDiv">
        {!!discount && <div className={styles.discount}>-{discount}%</div>}
        <img
          src={item.images_url[0]}
          alt={item.name}
          style={{ width: `${100 * size}` }}
        />
        <div id="productHoverDiv">
          <Link to={`/product/${item.id}`} state={{ item }} />
          <FeatherIcon
            icon="shopping-bag"
            onClick={() => addItem.mutate({ productId: item.id, quantity: 1 })}
          />
          <FeatherIcon
            icon="search"
            onClick={() => {
              onChangeItemSelected(item);
            }}
          />
        </div>
      </div>
      <div id="productDiv">
        <h5>{item.name}</h5>
        {discount ? (
          <span className={styles.basePrice}>
            {item.pricing.base_price.toFixed(2)}€
          </span>
        ) : (
          <p>{item.pricing.total_price.toFixed(2)}€</p>
        )}
      </div>
      <div className="d-flex justify-content-between align-items-end">
        <p id="productCategory">{item.category.toUpperCase()}</p>
        {!!discount && (
          <p className={styles.totalPrice}>
            {item.pricing.total_price.toFixed(2)}€
          </p>
        )}
      </div>
    </div>
  );
}

export default Product;
