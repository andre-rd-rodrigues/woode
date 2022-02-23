import React, { useState, useEffect } from "react";
import ItemModal from "components/ItemModal/ItemModal";
import products from "mocks/products";
import styles from "./products.module.scss";
import Product from "components/Product/Product";

function Products() {
  const [itemModalShow, setItemModalShow] = useState(false);
  const [items, setItems] = useState(undefined);
  const [currentItem, setCurrentItem] = useState({
    id: 1,
    name: "Cupholder",
    category: "decoration",
    price: 45.0,
    src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img15.jpg"
  });

  //Lifecycle
  useEffect(() => {
    setItems(products);
  }, []);

  return (
    <>
      <div className={styles.title}>
        <p>BROWSE OUR ITEMS</p>
        <h2>Ideal for your home</h2>
        <hr />
      </div>
      <div>
        <div className={styles.row}>
          {items &&
            items.map((item) => (
              <Product
                item={item}
                changeItemModal={(value) => setItemModalShow(value)}
                changeCurrentItemSelected={(item) => setCurrentItem(item)}
              />
            ))}
        </div>
      </div>
      <ItemModal
        item={currentItem}
        show={itemModalShow}
        onClose={() => setItemModalShow(false)}
      />
    </>
  );
}

export default Products;
