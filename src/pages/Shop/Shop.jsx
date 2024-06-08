import React from "react";
import Products from "components/ProductsSection/ProductsSection";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { selectProductsState } from "store/entities/products";

function Shop({ products, isLoading, error, isSuccess }) {
  return (
    <Container>
      <Products
        products={products}
        isLoading={isLoading}
        error={error}
        isSuccess={isSuccess}
      />
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    products: selectProductsState(state).items,
    isLoading: selectProductsState(state).isLoading,
    error: selectProductsState(state).error,
    isSuccess: selectProductsState(state).isSuccess
  };
};

export default connect(mapStateToProps, null)(Shop);
