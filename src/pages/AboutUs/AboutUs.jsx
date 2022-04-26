import React from "react";
import quotes from "assets/images/quotes.png";
import { motion } from "framer-motion";
import {
  containerVariant,
  verticalEntrance
} from "styles/motion/motionVariants";
import { about_content, about_reviews } from "mocks/local_data";
import { Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-slideshow-image";
import styles from "./aboutus.module.scss";

function AboutUs() {
  let orderSection = (item) => {
    return {
      image: {
        order: item.id === 2 ? 2 : 1
      },
      text: {
        order: item.id === 2 ? 1 : 2
      }
    };
  };
  return (
    <div className={styles.aboutUs}>
      <div className={styles.jumbotron}></div>
      <Container>
        {about_content.map((item) => (
          <motion.div
            variants={containerVariant}
            whileInView="visible"
            initial="hidden"
            className="row"
            id="aboutUs_first_section"
            key={item.id}
          >
            <Col
              className="text-center"
              sm={orderSection(item).image}
              md={orderSection(item).image}
              lg={orderSection(item).image}
            >
              <motion.img
                variants={verticalEntrance}
                src={item.src}
                alt="Experience Woode"
              />
            </Col>
            <Col
              className="d-flex justify-content-center flex-column align-items-center"
              sm={orderSection(item).text}
              md={orderSection(item).text}
              lg={orderSection(item).text}
            >
              <motion.div
                variants={verticalEntrance}
                id="aboutUs_first_section_text"
              >
                <h6>{item.subtitle}</h6>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                {/* <Button /> */}
              </motion.div>
            </Col>
          </motion.div>
        ))}
      </Container>
      <div className={styles.video}></div>
      <motion.div
        variants={containerVariant}
        whileInView="visible"
        initial="hidden"
        className={styles.comments}
      >
        <Fade autoplay arrows={false} duration={2000} className={styles.slider}>
          {about_reviews.map((slide) => (
            <div key={slide.id}>
              <motion.p variants={verticalEntrance}>{slide.subtitle}</motion.p>
              <motion.h3 variants={verticalEntrance}>{slide.title}</motion.h3>
            </div>
          ))}
        </Fade>
        <motion.img
          variants={verticalEntrance}
          src={quotes}
          alt="Best comments"
        />
      </motion.div>
    </div>
  );
}

export default AboutUs;
