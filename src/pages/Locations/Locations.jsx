import React from "react";
import Jumbotron from "components/Jumbotron/Jumbotron";
import LocationRow from "components/LocationRow/LocationRow";
import { locations } from "mocks/local_data";
import { Container } from "react-bootstrap";
import styles from "./locations.module.scss";

const Location = () => {
  return (
    <div className={styles.location}>
      <Jumbotron
        url="https://umea.qodeinteractive.com/wp-content/uploads/2021/01/p3-title-area-1536x880.jpg"
        height={400}
      >
        <Container>
          <h1>Our Locations</h1>
        </Container>
      </Jumbotron>
      {locations.map((item) => (
        <LocationRow content={item} key={item.id} />
      ))}
    </div>
  );
};

export default Location;
