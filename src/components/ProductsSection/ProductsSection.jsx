import React, { useState, useEffect } from "react";
import ItemModal from "components/ItemModal/ItemModal";
import Product from "components/Product/Product";
import { motion } from "framer-motion";
import products from "mocks/products";
import { Col, Row } from "react-bootstrap";
import {
  verticalEntrance,
  containerVariant,
  noRepeat
} from "styles/motion/motionVariants";
import styles from "./products.module.scss";

const ProductsSection = () => {
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
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={noRepeat}
    >
      <motion.div variants={verticalEntrance} className={styles.title}>
        <p>BROWSE OUR ITEMS</p>
        <h2>Ideal for your home</h2>
        <hr />
      </motion.div>
      <Row>
        {items?.map((item) => (
          <Col key={item.id} lg={3} md={6} sm={6}>
            <motion.div variants={verticalEntrance}>
              <Product
                item={item}
                changeItemModal={(value) => setItemModalShow(value)}
                changeCurrentItemSelected={(item) => setCurrentItem(item)}
              />
            </motion.div>
          </Col>
        ))}
      </Row>
      <ItemModal
        item={currentItem}
        show={itemModalShow}
        onClose={() => setItemModalShow(false)}
      />
    </motion.div>
  );
};

export default ProductsSection;
