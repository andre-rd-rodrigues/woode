import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import { connect } from "react-redux";
import {
  checkNewsletterNotification,
  fireNotification
} from "store/ui/notifications";
import styles from "./notifications.module.scss";

const NotificationNewsletter = ({
  checkNewsletterNotification,
  fireNotification
}) => {
  const [show, setShow] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    return fireNotification({ message: "Your email was added successfully!" });
  };

  const getStateFromLocalStorage = () => {
    const storageStateActive = localStorage.getItem(
      "notificationNewsletterActive"
    );

    if (storageStateActive === "true" && storageStateActive !== undefined) {
      return;
    } else if (
      storageStateActive === "false" &&
      storageStateActive !== undefined
    ) {
      checkNewsletterNotification({ checkValue: false });
      return setShow(false);
    } else {
      return localStorage.setItem("notificationNewsletterActive", true);
    }
  };

  const handleChangeCheckbox = (e) => {
    //Redux store has active state and "input checked" means to disable, so we must invert input value to match the implementation logic
    const checkValue = !e.target.checked;

    return checkNewsletterNotification({ checkValue });
  };

  useEffect(() => {
    getStateFromLocalStorage();
  }, []);

  return (
    show && (
      <div className={styles.newsletterNotification}>
        <button className={styles.cross} onClick={() => setShow(false)}>
          <FeatherIcon icon="x" size={20} />
        </button>
        <h4> Sign up for our newsletter</h4>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Your email" required aria-required />
          <button type="submit">
            <FeatherIcon icon="arrow-right" />
          </button>
        </form>
        <div className={styles.newsletterBody}>
          <img
            src="https://umea.qodeinteractive.com/wp-content/uploads/2020/12/subscribe-img.png"
            alt="Subscribe to our newsletter"
          />
          <div>
            <h5>Get our special promo </h5>
            <p>
              Be the first to get notified about all our promos, news & more.{" "}
            </p>
          </div>
        </div>
        <div className={styles.preventNewsletter}>
          <input
            type="checkbox"
            id="prevent_newsletter_notification"
            onClick={handleChangeCheckbox}
          />
          <label htmlFor="prevent_newsletter_notification">
            Prevent This Pop-up
          </label>
        </div>
      </div>
    )
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fireNotification: (obj) => dispatch(fireNotification(obj)),
    checkNewsletterNotification: (obj) =>
      dispatch(checkNewsletterNotification(obj))
  };
};
export default connect(null, mapDispatchToProps)(NotificationNewsletter);
