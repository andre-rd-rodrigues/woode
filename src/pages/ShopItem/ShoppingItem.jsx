import React from "react";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

function ShoppingItem({ item }) {
  const { category, name, price, src } = item;

  return (
    <Container>
      <Row sm={1} md={2}>
        <Col>
          <div
            className="item-modal-image-col"
            style={{ backgroundImage: `url(${src})` }}
          />
        </Col>
        <Col>
          <div className="item-modal-body-col">
            <h1>{name}</h1>
            <p>{`$ ${price}`}</p>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <div className="item-modal-actions">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button>Add to cart</button>
            </div>
            <div className="item-modal-additional-info">
              <p>SKU: 030</p>
              <p>CATEGORY: {category}</p>
              <p>
                TAG: <a href="#">Accessories</a>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ShoppingItem;
