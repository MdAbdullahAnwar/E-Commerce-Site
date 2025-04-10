import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import productsArr from "../Product/Products"; 
import "./ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  const product = productsArr.find((p) => p.id === productId);

  const [mainImage, setMainImage] = useState(product?.images?.[0]); // use first image

  if (!product) {
    return <h2 className="text-center text-danger">Product Not Found!</h2>;
  }

  return (
    <div className="product-page">
      <div className="product-images">
        <ul className="images-list">
            {product.images.map((url, index) => (
                <li key={index}>
                    <img
                        src={url}
                        alt={`Product view ${index}`}
                        onClick={() => setMainImage(url)}
                        className={mainImage === url ? "selected" : ""}
                    />
                </li>
            ))}
        </ul>
        <div className="full-image-wrapper">
            <img src={mainImage} alt="Selected" className="full-image" />
        </div>
      </div>

      <div className="product-details">
        <h1 className="product-name">{product.title}</h1>
        <p className="product-description">
          This is a high-quality product with excellent reviews and top-tier specs.
        </p>

        <ul className="product-specs">
          <li><strong>Price:</strong> ₹{product.price}</li>
          <li><strong>RAM:</strong> {product.RAM}</li>
          <li><strong>Storage:</strong> {product.storage}</li>
        </ul>

        <div className="product-reviews">
          <h2>Reviews</h2>
          {product.reviews.map((review, i) => (
            <div key={i} className="review">
              <h4>{review.name}</h4>
              <p className="rating">
                {"⭐".repeat(review.rating)}{" "}
                <span className="date">({new Date(review.date).toDateString()})</span>
              </p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>

        <Link to="/store" className="back-link">← Back to Store</Link>
      </div>
    </div>
  );
};

export default ProductPage;
