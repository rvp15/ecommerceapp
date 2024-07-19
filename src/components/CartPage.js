import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { updateQuantity, removeItem } from "../slices/cartSlice";
import { RiDeleteBinLine } from "react-icons/ri";

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  console.log(items);

  const handleUpdateQuantity = (id, value) => {
    console.log(value);
    dispatch(updateQuantity({ id, quantity: value }));
  };

  const handleDelete = (id) => {
dispatch(removeItem(id))
  }

  return (
    <div>
      <h2 className="p-5"> Cart ({items.length} items)</h2>
      <ListGroup>
        {items.map((item) => (
          <ListGroup.Item key={item.id}>
            <Row className="row">
              <Col md={2} className="col">
                <img
                  src={item.thumbnail}
                  alt="thumbline"
                  className="cart-img"
                />{" "}
                {item.title}
                <br />
                <span className="m-4" style={{ color: "green" }}>
                  {item.availabilityStatus}
                </span>
                : {item.stock}
              </Col>
              <Col md={2} className="col"></Col>
              <Col md={2} className="col">
                $ {item.price}
              </Col>
              <Col md={2} className="col">
                <Dropdown onSelect={(value)=> handleUpdateQuantity(item.id, value)}>
                  <Dropdown.Toggle
                    variant="Secondary"
                    id="dropdown-basic"
                  ></Dropdown.Toggle>
                  Qty:{item.quantity}
                  <Dropdown.Menu>
                  <Dropdown.Item eventKey={1}>1</Dropdown.Item>
                  <Dropdown.Item eventKey={2}>2</Dropdown.Item>
                  <Dropdown.Item eventKey={3}>3</Dropdown.Item>
                  <Dropdown.Item eventKey={4}>4</Dropdown.Item>
                  <Dropdown.Item eventKey={5}>5</Dropdown.Item>
                  <Dropdown.Item eventKey={6}>6</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col md={2} className="col">
                $ {item.price * item.quantity}
              </Col>
              <Col><button className="cart-del-btn" onClick={()=>handleDelete(item.id)}><RiDeleteBinLine/></button></Col>
            </Row>
          </ListGroup.Item>
        ))}
       
      </ListGroup>
    </div>
  );
};

export default CartPage;
