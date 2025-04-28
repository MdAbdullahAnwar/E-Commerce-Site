import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom"; 
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faMobileScreen,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../Store/CartContext";
import AuthContext from "../Store/AuthContext";
import "./Header.css";

const Header = ({
  showCartHandler,
  showWishlistHandler,
  authMode,         // This prop to control Login/Signup state
  onToggleAuthMode, // This prop for toggling between Login/Signup
}) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const history = useHistory(); 

  // Manage expanded state
  const [expanded, setExpanded] = useState(false);

  const loginSignupHandler = () => {
    // Toggle between login and signup mode
    onToggleAuthMode();     // This function should toggle the state between 'login' and 'signup'
    history.push("/auth");  // Redirect to auth page
  };

  // Handle NavLink click to close hamburger
  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <header>
      <Navbar expand="lg" expanded={expanded} onToggle={setExpanded} className="navbar shadow-lg">
        <Container className="navbar-container">
          
          {/* Left Section: Hamburger + Brand */}
          <div className="d-flex align-items-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-2" >
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>

            <Navbar.Brand href="/" className="navbar-brand">
              <FontAwesomeIcon icon={faMobileScreen} className="brand-icon" />
              MobileMart
            </Navbar.Brand>
          </div>

          {/* RIGHT SIDE - Login/Signup button always visible */}
          {!authCtx.token && (
            <div className="d-flex align-items-center ms-auto">
              <Button
                onClick={loginSignupHandler}
                variant="outline-primary"
                className="rectangular"
              >
                {authMode === "signup" ? "Login" : "Sign Up"}
              </Button>
            </div>
          )}

          {/* Authenticated Navigation */}
          {authCtx.token && (
            <>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <NavLink exact to="/" className="nav-link" onClick={handleNavLinkClick}>
                    Home
                  </NavLink>
                  <NavLink to="/store" className="nav-link" onClick={handleNavLinkClick}>
                    Store
                  </NavLink>
                  <NavLink to="/about" className="nav-link" onClick={handleNavLinkClick}>
                    About
                  </NavLink>
                  <NavLink to="/contact" className="nav-link" onClick={handleNavLinkClick}>
                    Contact
                  </NavLink>
                  <Button
                    onClick={() => { authCtx.logout(); setExpanded(false); }}
                    variant="outline-info"
                    className="rectangular"
                  >
                    Logout
                  </Button>
                </Nav>
              </Navbar.Collapse>

              {/* Wishlist & Cart (Large Screens) */}
              <div className="wishlist-cart-container d-none d-lg-flex">
                <Button
                  onClick={showWishlistHandler}
                  variant="outline-danger"
                  className="rectangular"
                >
                  <span className="wishlist-label">Your Wishlist</span>
                  <FontAwesomeIcon icon={faHeart} />
                  {cartCtx.wishlist.length > 0 && (
                    <span className="badge bg-danger">
                      {cartCtx.wishlist.length}
                    </span>
                  )}
                </Button>

                <Button
                  onClick={showCartHandler}
                  variant="outline-warning"
                  className="rectangular"
                >
                  <span className="cart-label">Your Cart</span>
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {cartCtx.items.length > 0 && (
                    <span className="badge bg-warning">
                      {cartCtx.items.length}
                    </span>
                  )}
                </Button>
              </div>
            </>
          )}

          {/* Wishlist & Cart (Small Screens) */}
          {authCtx.token && (
            <div className="wishlist-cart-container d-lg-none ms-auto">
              <Button
                onClick={showWishlistHandler}
                variant="outline-danger"
                className="rectangular"
              >
                <span className="wishlist-label">Your Wishlist</span>
                <FontAwesomeIcon icon={faHeart} />
                {cartCtx.wishlist.length > 0 && (
                  <span className="badge bg-danger">
                    {cartCtx.wishlist.length}
                  </span>
                )}
              </Button>

              <Button
                onClick={showCartHandler}
                variant="outline-warning"
                className="rectangular"
              >
                <span className="cart-label">Your Cart</span>
                <FontAwesomeIcon icon={faShoppingCart} />
                {cartCtx.items.length > 0 && (
                  <span className="badge bg-warning">
                    {cartCtx.items.length}
                  </span>
                )}
              </Button>
            </div>
          )}

        </Container>
      </Navbar>
    </header>
  );
};

export default Header;