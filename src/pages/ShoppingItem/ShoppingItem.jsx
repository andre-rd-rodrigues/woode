import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router";
import AdditionalInfo from "./AdditionalInfo";
import MainSection from "./MainSection";
import RelatedProducts from "./RelatedProducts";

function ShoppingItem() {
  //Get item params
  const location = useLocation();
  const { item } = location.state;

  return (
    <Container>
      <MainSection item={item} />
      <AdditionalInfo item={item} />
      <RelatedProducts item={item} />
    </Container>
  );
}

export default ShoppingItem;
