import { Link } from "react-router-dom";
import React, { Fragment, useContext } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../Store/CartContext";
import productsArr from "../Product/Products"; 
import './ProductList.css';

const ProductList = () => {
  const cartCtx = useContext(CartContext);

  const addItemToCart = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const addToWishlist = (item) => {
    cartCtx.addToWishlist(item);
  };

  return (
    <Fragment>
      <Container>
        <h1 className="text-center p-3 fw-bold text-uppercase text-primary">
          Our Products
        </h1>

        <Row className="justify-content-center">
          {productsArr.map((product) => (
            <Col key={product.id} lg={3} md={4} sm={6} xs={7}>
              <Card className="mb-4 product-card" style={{ width: "14rem" }}>
                <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                  <Card.Img variant="top" src={product.imageUrl} className="product-image" />
                  <Card.Title className="text-drk fw-semibold mt-2">{product.title}</Card.Title>
                </Link>

                <Card.Body className="text-center">
                  <Card.Text className="text-success fw-bold fs-5">Rs {product.price}</Card.Text>
                  <Card.Text className="d-flex justify-content-between text-muted fw-semibold">
                    <span>RAM: {product.RAM}</span>
                    <span>Storage: {product.storage}</span>
                  </Card.Text>

                  <div className="d-flex justify-content-around">
                    <Button variant="outline-danger" className="wishlist-btn" onClick={() => addToWishlist(product)}>
                      <FontAwesomeIcon icon={faHeart} />
                    </Button>
                    <Button variant="primary" className="cart-btn" onClick={() => addItemToCart(product)}>
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProductList;
