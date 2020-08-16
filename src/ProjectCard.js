import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { name, description } = props.product;
  return (
    <Card className="text-center">
      <Card.Header>
        <h3>{props.review}</h3>
      </Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
