import React, { useEffect } from "react";
import { connect } from "react-redux";
import { hideNotification } from "store/ui/notifications";
import styles from "./notifications.module.scss";

function TopNotification({ notificationState, hideNotificationAction }) {
  useEffect(() => {
    if (notificationState.active)
      return setTimeout(() => {
        hideNotificationAction();
      }, 2000);
  }, [notificationState.active]);

  if (notificationState.active)
    return (
      <div className={styles.notification}>{notificationState.message}</div>
    );
  return null;
}
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
