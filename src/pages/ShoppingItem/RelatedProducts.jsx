import ItemModal from "components/ItemModal/ItemModal";
import Product from "components/Product/Product";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchProductsThunk,
  selectProductsState
} from "store/entities/products";
import styles from "./relatedproducts.module.scss";

function RelatedProducts({
  item,
  getProducts,
  products,
  isLoading,
  error,
  isSuccess
}) {
  const [selectedItem, setSelectedItem] = useState(undefined);

  const relatedProducts = products.filter(
    (product) => product.category === item.category && product.id !== item.id
  );

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.relatedProducts}>
      <h3>Related products</h3>
      <div className="products-row">
        {relatedProducts?.map((item) => (
          <Product
            key={item.id}
            item={item}
            onChangeItemSelected={(item) => setSelectedItem(item)}
            size={2}
          />
        ))}
      </div>
      <ItemModal
        item={selectedItem}
        show={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProductsThunk())
  };
};

const mapStateToProps = (state) => {
  return {
    products: selectProductsState(state).items,
    isLoading: selectProductsState(state).isLoading,
    error: selectProductsState(state).error,
    isSuccess: selectProductsState(state).isSuccess
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedProducts);
