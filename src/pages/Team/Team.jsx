import React from "react";
import { motion } from "framer-motion";
import { team_members } from "mocks/local_data";
import { Container, Row } from "react-bootstrap";
import {
  containerVariant,
  verticalEntrance
} from "styles/motion/motionVariants";
import styles from "./team.module.scss";

function Team() {
  return (
    <motion.div
      variants={containerVariant}
      whileInView="visible"
      initial="hidden"
      className={styles.team}
    >
      <motion.div variants={verticalEntrance} className={styles.teamTitle}>
        <p>OUR CREATIVE FORCE</p>
        <h2>Meet our team</h2>
        <hr />
      </motion.div>
      <Container>
        <Row className={styles.teamRow} sm={1} md={4}>
          {team_members.map((member) => (
            <motion.div
              className="col"
              variants={verticalEntrance}
              key={member.id}
            >
              <div style={{ backgroundImage: `url(${member.src})` }}></div>
              <h4>{member.name}</h4>
              <p>{member.job.toUpperCase()}</p>
            </motion.div>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
}

export default Team;
