import React from "react";
import Lottie from "react-lottie-player";

const LottieAnimation = ({ lottie }) => {
  const styles = {
    width: 200,
    height: 200,
    margin: "auto"
  };

  return (
    <Lottie
      animationData={lottie}
      play
      loop={false}
      style={styles}
      rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
    />
  );
};

export default LottieAnimation;
