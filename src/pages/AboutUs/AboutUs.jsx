import React from "react";
import quotes from "assets/images/quotes.png";
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
          <Row id="aboutUs_first_section" key={item.id}>
            <Col
              className="text-center"
              sm={orderSection(item).image}
              md={orderSection(item).image}
              lg={orderSection(item).image}
            >
              <img src={item.src} alt="Experience Woode" />
            </Col>
            <Col
              className="d-flex justify-content-center flex-column align-items-center"
              sm={orderSection(item).text}
              md={orderSection(item).text}
              lg={orderSection(item).text}
            >
              <div id="aboutUs_first_section_text">
                <h6>{item.subtitle}</h6>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                {/* <Button /> */}
              </div>
            </Col>
          </Row>
        ))}
      </Container>
      <div className={styles.video}></div>
      <div className={styles.comments}>
        <Fade autoplay arrows={false} duration={2000} className={styles.slider}>
          {about_reviews.map((slide) => (
            <div key={slide.id}>
              <p>{slide.subtitle}</p>
              <h3>{slide.title}</h3>
            </div>
          ))}
        </Fade>
        <img src={quotes} alt="Best comments" />
      </div>
    </div>
  );
}

export default AboutUs;
