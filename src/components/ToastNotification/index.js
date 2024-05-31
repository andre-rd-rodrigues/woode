import React from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./toastnotification.module.scss";

const ToastNotification = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Slide}
    />
  );
};

export const notify = (type, message) => {
  switch (type) {
    case "success":
      toast.success(
        <div className={styles.toastContent}>
          <p>{message}</p>
        </div>,
        {
          className: styles.toast
        }
      );
      break;
    case "error":
      toast.error(
        <div className={styles.toastContent}>
          <p>{message}</p>
        </div>,
        {
          className: styles.toast
        }
      );
      break;
    default:
      toast(message);
      break;
  }
};

export default ToastNotification;
