import React from "react";
import { ArrowIcon } from "assets/Icons";
import Button from "components/Button/Button";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { home_slider } from "mocks/local_data";
import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-slideshow-image";
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
                <p>FURNITURE</p>
                <h1>{slide.title}</h1>
                <p className="mb-5">{slide.description}</p>
                <Button />
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
