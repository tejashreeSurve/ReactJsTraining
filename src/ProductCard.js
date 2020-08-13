import React from "react";
import ProductList from "./ProductList";
import { Card, Button } from "react-bootstrap";
import "./ProductCard.css";
const ProductCard = (props) => {
  const { name, stocked, category, description, price } = props.product;
  return (
    <Card className="text-center">
      <Card.Header>
        <h3>{name}</h3>
      </Card.Header>
      <Card.Body>
        {!stocked && <p>Out of stock</p>}
        <Card.Title>{category}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Price : ${price}</Card.Footer>
    </Card>
  );
};

export default ProductCard;
