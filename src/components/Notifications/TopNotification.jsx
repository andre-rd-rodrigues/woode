import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { connect } from "react-redux";
import { hideNotification } from "store/ui/notifications";
import styles from "./notifications.module.scss";

const TopNotification = ({ notificationState, hideNotificationAction }) => {
  //Lifecycle
  useEffect(() => {
    if (notificationState.active)
      return setTimeout(() => {
        hideNotificationAction();
      }, 2000);
  }, [notificationState.active, hideNotificationAction]);

  const variants = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0 }
  };

  //Render
  return (
    <AnimatePresence>
      {notificationState.active && (
        <motion.div
          variants={variants}
          initial="hidden"
          exit="hidden"
          animate="visible"
          className={styles.notification}
          data-testid="top_notification"
        >
          {notificationState.message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const mapStateToProps = (state) => {
  return {
    notificationState: state.ui.notifications.topNotification
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideNotificationAction: () => dispatch(hideNotification())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TopNotification);
