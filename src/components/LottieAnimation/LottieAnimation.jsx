import React from "react";
import Lottie from "react-lottie";

const LottieAnimation = ({ lottie }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return <Lottie options={defaultOptions} height={200} width={200} />;
};

export default LottieAnimation;
