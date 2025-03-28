import React, { Fragment } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './ProductList.css';

const ProductList = () => {
  const productsArr = [
    {
      title: "Apple iPhone 16 Pro",
      price: " 1,20,000",
      RAM: "8GB",
      storage: "256GB",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "OnePlus 13",
      price: " 70,000",
      RAM: "8GB",
      storage: "256GB",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Oppo K12x",
      price: " 13,000",
      RAM: "8GB",
      storage: "256GB",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Samsung Galaxy F06",
      price: " 10,000",
      RAM: "8GB",
      storage: "256GB",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
    {
      title: "Apple iPhone 16 Pro",
      price: " 1,20,000",
      RAM: "8GB",
      storage: "256GB",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Apple iPhone 16 Pro",
      price: " 1,20,000",
      RAM: "8GB",
      storage: "256GB",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
  ];

  return (
    <Fragment>
      <Container>
        <h1 className="text-center p-3 fw-bold text-uppercase text-primary">
          Our Products
        </h1>
        <Row className="justify-content-center">
          {productsArr.map((product, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={7}>
              <Card className="mb-4 product-card" style={{ width: "14rem" }}>
                <Card.Img variant="top" src={product.imageUrl} className="product-image" />
                <Card.Body className="text-center">
                  <Card.Title className="text-drk fw-semibold">{product.title}</Card.Title>
                  <Card.Text className="text-success fw-bold fs-5">
                    Rs {product.price}
                  </Card.Text>
                  <Card.Text className="d-flex justify-content-between text-muted fw-semibold">
                    <span>RAM:{product.RAM}</span>
                    <span>Storage:{product.storage}</span>
                  </Card.Text>
                  
                  {/* Wishlist and Cart Buttons */}
                  <div className="d-flex justify-content-between">
                    <Button variant="outline-danger" className="wishlist-btn">
                      <FontAwesomeIcon icon={faHeart} />
                      {/* Heart Icon */}
                    </Button>

                    <Button variant="primary" className="cart-btn">
                      <FontAwesomeIcon icon={faShoppingCart} />
                      {/* Cart Icon */}
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
