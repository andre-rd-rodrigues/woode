import ItemModal from "components/ItemModal/ItemModal";
import Product from "components/Product/Product";
import { motion } from "framer-motion";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import {
  containerVariant,
  noRepeat,
  verticalEntrance
} from "styles/motion/motionVariants";
import styles from "./products.module.scss";

const ProductsSection = ({ products, isLoading, error, isSuccess }) => {
  const [selectedItem, setSelectedItem] = useState(undefined);

  return (
    <div>
      <motion.div
        variants={verticalEntrance}
        initial="hidden"
        whileInView="visible"
        viewport={noRepeat}
        className={styles.title}
      >
        <p>BROWSE OUR ITEMS</p>
        <h2>Ideal for your home</h2>
        <hr />
      </motion.div>
      {isLoading && (
        <div className="d-block text-center">
          <ClipLoader color={"black"} loading={isLoading} size={50} />
        </div>
      )}
      {error && <p className="text-center">Something went wrong...</p>}

      {isSuccess && (
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={noRepeat}
        >
          <Row>
            {products?.map((item) => (
              <Col key={item.id} lg={3} md={6} sm={6}>
                <motion.div variants={verticalEntrance}>
                  <Product
                    item={item}
                    onChangeItemSelected={(item) => setSelectedItem(item)}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      )}

      <ItemModal
        item={selectedItem}
        show={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default ProductsSection;
