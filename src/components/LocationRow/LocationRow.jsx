import React from "react";
import FeatherIcon from "feather-icons-react";
import { Col, Row } from "react-bootstrap";
import styles from "./locationrow.module.scss";

const LocationRow = ({ content }) => {
  const { title, description, contact, map } = content;
  const { address, email, phone } = contact;

  const iconSize = 16;

  return content ? (
    <div className={`${styles.locationRow} container`}>
      <Row>
        <Col sm={12} md={7} lg={7}>
          <iframe src={map} style={{ border: 0 }} title="map" loading="lazy" />
        </Col>
        <Col sm={12} md={4} lg={4}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="location_row_info">
            <div>
              <FeatherIcon icon="mail" size={iconSize} />
              <p>{email}</p>
            </div>
            <div>
              <FeatherIcon icon="home" size={iconSize} />
              <p>{address}</p>
            </div>
            <div>
              <FeatherIcon icon="phone" size={iconSize} />
              <p>{phone}</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  ) : null;
};

export default LocationRow;
