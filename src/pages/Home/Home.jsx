import ImagesRow from "components/ImagesRow/ImagesRow";
import Team from "pages/Team/Team";
import React from "react";
import Products from "components/ProductsSection/ProductsSection";
import Slider from "./Slider";
import TriplePreview from "./TriplePreview";
import { imagesRow } from "mocks/local_data";

function Home() {
  return (
    <>
      <Slider />
      <div className="mx-3">
        <TriplePreview />
        <Products />
      </div>
      <ImagesRow images={imagesRow} />
      <Team />
    </>
  );
}

export default Home;
