import React from "react";
import { ArrowIcon } from "assets/Icons";
import Button from "components/Button/Button";
import { motion } from "framer-motion";
import { home_slider } from "mocks/local_data";
import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-slideshow-image";
import {
  horizontalEntrance,
  containerVariant,
  noRepeat
} from "styles/motion/motionVariants";
import styles from "./slider.module.scss";

function Slider() {
  return (
    <Fade
      autoplay
      duration={3000}
      className={styles.slider}
      prevArrow={<ArrowIcon id="arrow-prev" transform="rotate(180)" />}
      nextArrow={<ArrowIcon id="arrow-next" />}
    >
      {home_slider.map((slide) => (
        <div
          id="slider-div"
          style={{ backgroundImage: `url(${slide.src})` }}
          key={slide.title}
        >
          <Container>
            <Row>
              <Col>
                <motion.div
                  variants={containerVariant}
                  initial="hidden"
                  animate="visible"
                  viewport={noRepeat}
                >
                  <motion.p variants={horizontalEntrance}>FURNITURE</motion.p>
                  <motion.h1 variants={horizontalEntrance}>
                    {slide.title}
                  </motion.h1>
                  <motion.p variants={horizontalEntrance} className="mb-5">
                    {slide.description}
                  </motion.p>
                  <motion.div variants={horizontalEntrance}>
                    <Button />
                  </motion.div>
                </motion.div>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      ))}
    </Fade>
  );
}

export default Slider;
