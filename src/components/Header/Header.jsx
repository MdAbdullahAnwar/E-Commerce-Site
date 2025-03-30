import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faMobileScreen, faBars } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../Store/CartContext";
import "./Header.css";

const Header = ({ showCartHandler, showWishlistHandler }) => {
  const cartCtx = useContext(CartContext);

  return (
    <header>
      <Navbar expand="lg" className="navbar shadow-lg">
        <Container className="navbar-container">

          {/* Left Section: Hamburger + Brand */}
          <div className="navbar-left">
           
            {/* Hamburger Menu */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler d-lg-none">
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>


            {/* Brand beside Hamburger */}
            <Navbar.Brand href="/" className="navbar-brand">
              <FontAwesomeIcon icon={faMobileScreen} className="brand-icon" />
              MobileMart
            </Navbar.Brand>
            
          </div>


          {/* Right Section: Wishlist & Cart (Only on Small Screens) */}
          <div className="wishlist-cart-container d-lg-none">
          
            <Button onClick={showWishlistHandler} variant="outline-danger" className="rectangular">
              
              <span className="wishlist-label">
                Your Wishlist
              </span>
              
              <FontAwesomeIcon icon={faHeart} />
              
              {cartCtx.wishlist.length > 0 && <span className="badge bg-danger">{cartCtx.wishlist.length}</span>}
            
            </Button>


            <Button onClick={showCartHandler} variant="outline-warning" className="rectangular">
              
              <span className="cart-label">
                Your Cart
              </span>
              
              <FontAwesomeIcon icon={faShoppingCart} />
              
              {cartCtx.items.length > 0 && <span className="badge bg-warning">{cartCtx.items.length}</span>}
            
            </Button>
          
          </div>


          {/* Navbar Links */}
          <Navbar.Collapse id="basic-navbar-nav">
          
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/store" className="nav-link">Store</NavLink>
              <NavLink to="/about" className="nav-link">About</NavLink>
            </Nav>
          
          </Navbar.Collapse>


          {/* Wishlist & Cart (Only on Large Screens) */}
          <div className="wishlist-cart-container d-none d-lg-flex">
            
            <Button onClick={showWishlistHandler} variant="outline-danger" className="rectangular">
              <span className="wishlist-label">
                Your Wishlist
              </span>
              
              <FontAwesomeIcon icon={faHeart} />
              
              {cartCtx.wishlist.length > 0 && <span className="badge bg-danger">{cartCtx.wishlist.length}</span>}
            </Button>


            <Button onClick={showCartHandler} variant="outline-warning" className="rectangular">
              <span className="cart-label">
                Your Cart
              </span>

              <FontAwesomeIcon icon={faShoppingCart} />
              
              {cartCtx.items.length > 0 && <span className="badge bg-warning">{cartCtx.items.length}</span>}
            </Button>
          
          </div>

        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
