import React from "react";
import { team_members } from "mocks/local_data";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./team.module.scss";

function Team() {
  return (
    <div className={styles.team}>
      <div className={styles.teamTitle}>
        <p>OUR CREATIVE FORCE</p>
        <h2>Meet our team</h2>
        <hr />
      </div>
      <Container>
        <Row className={styles.teamRow} sm={1} md={4}>
          {team_members.map((member) => (
            <Col key={member.id}>
              <div style={{ backgroundImage: `url(${member.src})` }}></div>
              <h4>{member.name}</h4>
              <p>{member.job.toUpperCase()}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Team;
