import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import CartContext from "../Store/CartContext";
import "./WishlistModal.css";

const WishlistModal = ({ show, onHide }) => {
  const cartCtx = useContext(CartContext);

  return (
    <Modal show={show} onHide={onHide} centered backdrop={true}>
      
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">
          ❤️ Your Wishlist
        </Modal.Title>
      </Modal.Header>


      <Modal.Body>
        {cartCtx.wishlist.length === 0 ? (
          <p className="text-center text-muted">
            Your wishlist is empty.
          </p>
        ) : (
          <div className="wishlist-items">
            
            {cartCtx.wishlist.map((item) => (
              <div className="wishlist-item d-flex align-items-center" key={item.id}>
                
                <img src={item.imageUrl} alt={item.title} className="wishlist-image" />
                
                <div className="wishlist-details">
                  <span className="fw-semibold">
                    {item.title}
                  </span>
                  <span className="text-success fw-bold">
                    Rs {item.price}
                  </span>
                </div>

                <div className="d-flex gap-2">
                  <Button 
                    variant="success" 
                    className="wishlist-add-to-cart-btn"
                    onClick={() => {
                      cartCtx.addItem(item);
                      cartCtx.removeFromWishlist(item.id);
                    }}
                  >
                    Add to Cart
                  </Button>
                  
                  <Button
                    variant="danger"
                    className="wishlist-remove-btn"
                    onClick={() => cartCtx.removeFromWishlist(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Modal.Body>


      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>

    </Modal>
  );
};

export default WishlistModal;
