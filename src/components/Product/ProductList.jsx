import React, { Fragment, useContext } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../Store/CartContext";
import './ProductList.css';

const ProductList = () => {
  const productsArr = [
    {
      id: "p1",
      title: "Apple iPhone 16 Pro",
      price: 120000,
      RAM: "8GB",
      storage: "256GB",
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: "p2",
      title: "OnePlus 13",
      price: 70000,
      RAM: "8GB",
      storage: "256GB",
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: "p3",
      title: "Oppo K12x",
      price: 13000,
      RAM: "8GB",
      storage: "256GB",
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: "p4",
      title: "Samsung Galaxy F06",
      price: 10000,
      RAM: "8GB",
      storage: "256GB",
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
    {
      id: "p5",
      title: "Apple iPhone 16 Pro",
      price: 120000,
      RAM: "8GB",
      storage: "256GB",
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: "p6",
      title: "OnePlus 13",
      price: 70000,
      RAM: "8GB",
      storage: "256GB",
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
  ];

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
                

                <Card.Img variant="top" src={product.imageUrl} className="product-image" />
                
                <Card.Body className="text-center">
                  
                  <Card.Title className="text-drk fw-semibold">{product.title}</Card.Title>
                  
                  <Card.Text className="text-success fw-bold fs-5">Rs {product.price}</Card.Text>
                  
                  <Card.Text className="d-flex justify-content-between text-muted fw-semibold">
                    <span>RAM:{product.RAM}</span>
                    <span>Storage:{product.storage}</span>
                  </Card.Text>


                  {/* Wishlist and Cart Buttons */}
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
