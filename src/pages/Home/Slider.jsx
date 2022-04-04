import { ArrowIcon } from "assets/Icons";
import Button from "components/Button/Button";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-slideshow-image";
import styles from "./slider.module.scss";

function Slider() {
  const content = [
    {
      title: "Modern.",
      description:
        "The perfect place for every contemporary furniture store and manufacturer. This is Woode.",
      src: "https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Art.",
      description:
        "The perfect place for every contemporary furniture store and manufacturer. This is Woode.",
      src: "https://images.unsplash.com/photo-1634643836960-c345b3c3e998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
    },
    {
      title: "Peace.",
      description:
        "The perfect place for every contemporary furniture store and manufacturer. This is Woode.",
      src: "https://images.unsplash.com/photo-1592549585866-486f41343aaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <Fade
      autoplay
      duration={3000}
      className={styles.slider}
      prevArrow={<ArrowIcon id="arrow-prev" transform="rotate(180)" />}
      nextArrow={<ArrowIcon id="arrow-next" />}
    >
      {content.map((slide) => (
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
