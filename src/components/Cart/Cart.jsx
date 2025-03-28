import React from "react";
import { Modal, Button } from "react-bootstrap";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = ({ showCartHandler }) => {
  return (
    <Modal show={true} onHide={showCartHandler} centered backdrop="true">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">🛒 Your Cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="cart-header d-flex justify-content-between fw-semibold">
          <span className="cart-item">ITEM</span>
          <span className="cart-price">PRICE</span>
          <span className="cart-quantity">QUANTITY</span>
        </div>

        <div>
          <CartItem />
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="total-title fs-5 fw-bold">Total</span>
          <span className="total-value fs-5 text-success">$0</span>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={showCartHandler}>
          Close
        </Button>
        <Button variant="success">Purchase</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
