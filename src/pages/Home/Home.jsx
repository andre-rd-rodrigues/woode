import ImagesRow from "components/ImagesRow/ImagesRow";
import Team from "pages/Team/Team";
import React from "react";
import Products from "components/ProductsSection/ProductsSection";
import Slider from "./Slider";
import TriplePreview from "./TriplePreview";
import uuid from "react-uuid";

function Home() {
  const imagesRow = [
    {
      src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/client-img-1-ver-x2.png",
      alt: "Gallery furniture",
      id: uuid()
    },
    {
      src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/client-img-3-ver-x2.png",
      alt: "Furnitura",
      id: uuid()
    },
    {
      src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/client-img-2-ver-x2.png",
      alt: "Furniture for everyone",
      id: uuid()
    },
    {
      src: "	https://umea.qodeinteractive.com/wp-content/uploads/2020/11/client-img-4-ver-x2.png",
      alt: "Furniture woode gallery",
      id: uuid()
    },
    {
      src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/client-img-1-ver-x2.png",
      alt: "Gallery furniture - Woode",
      id: uuid()
    }
  ];

  return (
    <>
      <h1>YOU ARE AMAZING!</h1>
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
