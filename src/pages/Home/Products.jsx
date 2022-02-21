import React, { useState } from "react";
import styles from "./products.module.scss";
import FeatherIcon from "feather-icons-react";
import ItemModal from "components/ItemModal/ItemModal";

function Products() {
  const [itemModalShow, setItemModalShow] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    id: 1,
    name: "Cupholder",
    category: "decoration",
    price: 45.0,
    src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img15.jpg"
  });

  const items = [
    {
      id: 1,
      name: "Cupholder",
      category: "decoration",
      price: 45.0,
      src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img15.jpg"
    },
    {
      id: 2,
      name: "Water Pot",
      category: "decoration",
      price: 75.0,
      src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img22.jpg"
    },
    {
      id: 3,
      name: "Kitchen Cupboard",
      category: "furniture",
      price: 150.0,
      src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img23.jpg"
    },
    {
      id: 4,
      name: "Baby Chair",
      category: "furniture",
      price: 90.0,
      src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img24.jpg"
    },
    {
      id: 5,
      name: "Reading Chair",
      category: "furniture",
      price: 25.0,
      src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img25.jpg"
    },
    {
      id: 6,
      name: "Narrow Vase",
      category: "decoration",
      price: 67.0,
      src: "	https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img26.jpg"
    },
    {
      id: 7,
      name: "Neon Light",
      category: "lighting",
      price: 36.0,
      src: "	https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img27.jpg"
    },
    {
      id: 8,
      name: "Flower Pot",
      category: "decoration",
      price: 16.0,
      src: "	https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img28.jpg"
    }
  ];
  return (
    <>
      <div className={styles.title}>
        <p>BROWSE OUR ITEMS</p>
        <h2>Ideal for your home</h2>
        <hr />
      </div>
      <div>
        <div className={styles.row}>
          {items.map((item) => (
            <div className={styles.productCol} key={item.id}>
              <div id="productImageDiv">
                <img src={item.src} alt="Woode product" />
                <div id="productHoverDiv">
                  <FeatherIcon icon="shopping-bag" />
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
      />
    </>
  );
}

export default Products;
