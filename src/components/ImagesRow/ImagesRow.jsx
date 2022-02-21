import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./imagesrow.module.scss";

function ImagesRow({ images = [] }) {
  return (
    <Container>
      <Row className={styles.imagesRow}>
        {images.map((image) => (
          <Col className="text-center">
            <img src={image.src} alt={image.alt} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ImagesRow;
