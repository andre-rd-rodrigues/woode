import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import uuid from "react-uuid";
import styles from "./team.module.scss";

function Team() {
  const teamMembers = [
    {
      name: "Nicolette Ritonni",
      job: "fine ceramics",
      src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/team-img-4.jpg",
      id: uuid()
    },
    {
      name: "Juliette Massé",
      job: "store manager",
      src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/team-img-3.jpg",
      id: uuid()
    },
    {
      name: "Nicolas Waller",
      job: "arquitect",
      src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/team-img-2.jpg",
      id: uuid()
    },
    {
      name: "Yeung Ngai",
      job: "designer",
      src: "	https://umea.qodeinteractive.com/wp-content/uploads/2020/11/team-img-1.jpg",
      id: uuid()
    }
  ];

  return (
    <div className={styles.team}>
      <div className={styles.teamTitle}>
        <p>OUR CREATIVE FORCE</p>
        <h2>Meet our team</h2>
        <hr />
      </div>
      <Container>
        <Row className={styles.teamRow} sm={1} md={4}>
          {teamMembers.map((member) => (
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
