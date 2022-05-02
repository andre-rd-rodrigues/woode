import React from "react";
import { motion } from "framer-motion";
import { home_triple_view_content } from "mocks/local_data";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  containerVariant,
  noRepeat,
  verticalEntrance
} from "styles/motion/motionVariants";
import styles from "./triplepreview.module.scss";

function TriplePreview() {
  return (
    <motion.div
      variants={containerVariant}
      whileInView="visible"
      initial="hidden"
      viewport={noRepeat}
    >
      <Row className="my-5" sm={1} md={3}>
        {home_triple_view_content.map((item) => (
          <Col className={styles.col} key={item.id}>
            <Link to="/shop">
              <motion.div
                variants={verticalEntrance}
                className={styles.colDiv}
                style={{ backgroundImage: `url(${item.src})` }}
              >
                <p>{item.label.toUpperCase()}</p>
                <h4>{item.title}</h4>
                <div></div>
              </motion.div>
            </Link>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default TriplePreview;
