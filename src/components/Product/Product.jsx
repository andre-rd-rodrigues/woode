import FeatherIcon from "feather-icons-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addItemThunk, selectCartState } from "store/entities/cart";
import styles from "./product.module.scss";

function Product({ item, onChangeItemSelected, size, addItem }) {
  const discount = item.pricing.discount.amount;

  return (
    <div className={styles.product}>
      <div id="productImageDiv">
        {!!discount && (
          <div className={styles.discount}>-{discount.toFixed(2)}%</div>
        )}
        <img
          src={item.images_url[0]}
          alt={item.name}
          style={{ width: `${100 * size}` }}
        />
        <div id="productHoverDiv">
          <Link to={`/product/${item.id}`} state={{ item }} />
          <FeatherIcon
            icon="shopping-bag"
            onClick={() => addItem({ productId: item.id, quantity: 1 })}
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
          <span className={styles.basePrice}>{item.pricing.base_price}€</span>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItemThunk(item))
  };
};

const mapStateToProps = (state) => {
  return {
    isCartLoading: selectCartState(state).isLoading,
    isCartError: selectCartState(state).error,
    isCartSuccess: selectCartState(state).isSuccess
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
