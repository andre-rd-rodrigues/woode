import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./triplepreview.module.scss";

function TriplePreview() {
  const content = [
    {
      id: 1,
      label: "special offer",
      title: "Recycled metal",
      src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/h5-baner-1.jpg"
    },
    {
      id: 2,
      label: "top picks",
      title: "Custom woodwork",
      src: "https://umea.qodeinteractive.com/wp-content/uploads/2021/01/h5-baner-2-768x296.jpg"
    },
    {
      id: 3,
      label: "minimal décor",
      title: "Handmade pottery",
      src: "	https://umea.qodeinteractive.com/wp-content/uploads/2020/11/h5-baner-3.jpg"
    }
  ];
  return (
    <Row className="my-5" sm={1} md={3}>
      {content.map((item) => (
        <Col className={styles.col} key={item.id}>
          <Link to="/shop">
            <div
              className={styles.colDiv}
              style={{ backgroundImage: `url(${item.src})` }}
            >
              <p>{item.label.toUpperCase()}</p>
              <h4>{item.title}</h4>
              <div></div>
            </div>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

export default TriplePreview;
