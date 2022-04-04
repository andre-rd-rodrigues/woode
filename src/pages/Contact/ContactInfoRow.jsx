import React from "react";
import FeatherIcon from "feather-icons-react";
import styles from "./contact.module.scss";

const ContactInfoRow = ({ icon, text }) => {
  return (
    <div className={styles.contactInfoRow}>
      <FeatherIcon icon={icon} />
      <p>{text}</p>
    </div>
  );
};

export default ContactInfoRow;
