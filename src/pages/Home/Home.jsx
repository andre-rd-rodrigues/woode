import React from "react";
import Products from "./Products";
import Slider from "./Slider";
import TriplePreview from "./TriplePreview";

function Home() {
  return (
    <>
      <Slider />
      <div className="mx-4">
        <TriplePreview />
        <Products />
      </div>
    </>
  );
}

export default Home;
