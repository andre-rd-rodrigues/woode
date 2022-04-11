import React, { useEffect, useState } from "react";
import ItemModal from "components/ItemModal/ItemModal";
import Product from "components/Product/Product";
import productsJSON from "mocks/products";
import styles from "./relatedproducts.module.scss";

function RelatedProducts() {
  const [products, setProducts] = useState(undefined);
  const [itemModalShow, setItemModalShow] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    id: 1,
    name: "Cupholder",
    category: "decoration",
    price: 45.0,
    src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img15.jpg"
  });

  //Lifecycle
  useEffect(() => {
    setProducts(productsJSON.slice(0, 5));
  }, []);

  return (
    <div className={styles.relatedProducts}>
      <h3>Related products</h3>
      <div className="products-row">
        {products &&
          products.map((item) => (
            <Product
              key={item.id}
              item={item}
              changeItemModal={(value) => setItemModalShow(value)}
              changeCurrentItemSelected={(item) => setCurrentItem(item)}
              size={2}
            />
          ))}
      </div>
      <ItemModal
        item={currentItem}
        show={itemModalShow}
        onClose={() => setItemModalShow(false)}
      />
    </div>
  );
}

export default RelatedProducts;
