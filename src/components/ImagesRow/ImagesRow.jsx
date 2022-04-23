import React from "react";
import { motion } from "framer-motion";
import { Col, Container } from "react-bootstrap";
import { containerVariant, scaleEntrance } from "styles/motion/motionVariants";
import styles from "./imagesrow.module.scss";

function ImagesRow({ images = [] }) {
  return (
    <Container>
      <motion.div
        variants={containerVariant}
        whileInView="visible"
        initial="hidden"
        className={`${styles.imagesRow} row`}
      >
        {images.map((image) => (
          <Col className="text-center" key={image.id}>
            <motion.div variants={scaleEntrance}>
              <img src={image.src} alt={image.alt} />
            </motion.div>
          </Col>
        ))}
      </motion.div>
    </Container>
  );
}

export default ImagesRow;
