import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { triple_view_content } from "mocks/local_data";
import styles from "./triplepreview.module.scss";

function TriplePreview() {
  return (
    <Row className="my-5" sm={1} md={3}>
      {triple_view_content.map((item) => (
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
