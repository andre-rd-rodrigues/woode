import ItemModal from "components/ItemModal/ItemModal";
import Product from "components/Product/Product";
import { useState } from "react";
import { connect } from "react-redux";
import { ClipLoader } from "react-spinners";
import { selectProductsState } from "store/entities/products";
import styles from "./relatedproducts.module.scss";

function RelatedProducts({ item, products, isLoading, error }) {
  const [selectedItem, setSelectedItem] = useState(undefined);

  const relatedProducts = products.filter(
    (product) => product.category === item.category && product.id !== item.id
  );

  return (
    <div className={styles.relatedProducts}>
      <h3>Related products</h3>
      {isLoading && (
        <div className="d-block text-center">
          <ClipLoader color={"black"} loading={isLoading} size={50} />
        </div>
      )}
      {error && <p className="text-center">Something went wrong...</p>}
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

const mapStateToProps = (state) => {
  return {
    products: selectProductsState(state).items,
    isLoading: selectProductsState(state).isLoading,
    error: selectProductsState(state).error,
    isSuccess: selectProductsState(state).isSuccess
  };
};

export default connect(mapStateToProps, null)(RelatedProducts);
