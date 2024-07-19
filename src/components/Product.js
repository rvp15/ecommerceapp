import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import {addItem} from '../slices/cartSlice'

const Product = (props) => {
  const dispatch = useDispatch();
  const { id, title, thumbnail, description, category, price, rating } = props.product;

  const handleAddtocart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="col">
      <Card style={{ width: "18rem", margin: ".5rem" }}>
        <Card.Img variant="top" src={thumbnail} />

        <Card.Body>
          <span className="badge text-bg-success custom-badge badges">
            {category}
          </span>
          <br />
          <Card.Title>C{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Rating: {rating}</Card.Text>
          <Card.Text>Price: ${price}</Card.Text>
          <Button
            variant="primary"
            onClick={() => handleAddtocart({ ...props, quantity: 1 })}
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
