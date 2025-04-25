import React, { useContext } from "react";
import CartContext from "../Store/CartContext";
import { Button } from "react-bootstrap";
import "./CartItem.css";

const CartItem = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div>
      {cartCtx.items.map((item) => (
        <div className="cart-items" key={item.id}>
          <div className="cart-item-name">
            <img src={item.imageUrl} alt={item.title}>
            </img>
            <span className="title">
              {item.title}
            </span>
          </div>

          <div className="cart-items-price">
            Rs {item.price}
          </div>

          <div className="cart-items-quantity">
            <div className="cart-quantity-control">

              <Button className="quantity-btn" onClick={() => cartCtx.updateItemQuantity(item.id, 1)}
              >
                +
              </Button>

              <Button className="quantity-btn"  onClick={() => cartCtx.updateItemQuantity(item.id, -1)}
              >
                −
              </Button>

            </div>

            <input type="number" value={item.quantity} readOnly className="cart-quantity-input" />

            <Button onClick={() => cartCtx.removeItem(item.id)} className="remove-btn">
              Remove
            </Button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;