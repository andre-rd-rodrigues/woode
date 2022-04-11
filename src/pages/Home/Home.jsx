import React from "react";
import ImagesRow from "components/ImagesRow/ImagesRow";
import Products from "components/ProductsSection/ProductsSection";
import { imagesRow } from "mocks/local_data";
import Team from "pages/Team/Team";
import Slider from "./Slider";
import TriplePreview from "./TriplePreview";

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
