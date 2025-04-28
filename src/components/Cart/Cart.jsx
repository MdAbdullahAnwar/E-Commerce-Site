import React, { useContext, useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import CartItem from "./CartItem";
import CartContext from "../Store/CartContext";
import "./Cart.css";

const Cart = ({ showCartHandler }) => {
  const cartCtx = useContext(CartContext);
  const [showSuccess, setShowSuccess] = useState(false); 
  // Local state for success message

  // Handle Purchase Button Click
  const handlePurchase = () => {
    setShowSuccess(true); // Show success message
    setTimeout(() => {
      cartCtx.clearCart(); // Empty the cart after purchase
      setShowSuccess(false); // Hide message after 5 seconds
      showCartHandler(); // Close cart modal
    }, 3000);
  };

  return (
    <>
      <Modal show={true} onHide={showCartHandler} centered>

        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">
            🛒 Your Cart
          </Modal.Title>
        </Modal.Header>


        <Modal.Body>
          {showSuccess && ( // Success message appears here
            <Alert variant="success" className="text-center">
              🎉  Order Placed Successfully!  🎉
              <br></br>
              Thank you for shopping with us. 🚀
            </Alert>
          )}

          {cartCtx.items.length === 0 ? (
            <p className="text-center text-muted">
              Your cart is empty.
            </p>
          ) : (
            <>
              <div className="cart-header d-flex justify-content-between fw-semibold">
                <span>ITEM</span>
                <span>PRICE</span>
                <span>QUANTITY</span>
              </div>


              <CartItem />


              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="fs-5 fw-bold">Total</span>

                <span className="fs-5 text-success">Rs {cartCtx.totalAmount}</span>
              </div>
            </>
          )}
        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" 
          onClick={showCartHandler}
          >
            Close
          </Button>

          {cartCtx.items.length > 0 && (
            <Button variant="success" 
            onClick={handlePurchase}
            >
              Purchase
            </Button>
          )}
        </Modal.Footer>
      
      </Modal>
    </>
  );
};

export default Cart;