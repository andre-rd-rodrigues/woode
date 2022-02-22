import React, { useState, useEffect } from "react";
import styles from "./products.module.scss";
import FeatherIcon from "feather-icons-react";
import ItemModal from "components/ItemModal/ItemModal";
import { useDispatch } from "react-redux";
import { addedItem } from "store/entities/cart";
import products from "mocks/products";

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

  const dispatch = useDispatch();

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
              <div className={styles.productCol} key={item.id}>
                <div id="productImageDiv">
                  <img src={item.src} alt="Woode product" />
                  <div id="productHoverDiv">
                    <FeatherIcon
                      icon="shopping-bag"
                      onClick={() =>
                        dispatch(addedItem({ item: { ...item, amount: 1 } }))
                      }
                    />
                    <FeatherIcon
                      icon="search"
                      onClick={() => {
                        setCurrentItem(item);
                        setItemModalShow(true);
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
            ))}
        </div>
      </div>
      <ItemModal
        item={currentItem}
        show={itemModalShow}
        onClose={() => setItemModalShow(false)}
        action={{ dispatch, addedItem }}
      />
    </>
  );
}

export default Products;
