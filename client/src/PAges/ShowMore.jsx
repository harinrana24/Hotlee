import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // Adjust the import path as necessary
import products from "../productsData"; // Adjust the import path as necessary
import Footer from "../components/Footer";

function ShowMore() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productID = Number(id);
    const productDetails = products.find((product) => product.id === productID);
    setProduct(productDetails);
  }, [id]);

  if (!product) {
    return (
      <div>
        <Navbar />
        <div>Product not found or loading...</div>
      </div>
    );
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Navbar />
      <div className="show-details-container">
        <h1>Product Details</h1>
        <p className="show-quote">
          A taste of the extraordinary in every dish.
        </p>
        <div className="show-detail-view">
          <div className="show-image-container">
            <img
              src={product.image}
              alt={product.name}
              className="show-product-image"
            />
          </div>
          <div className="show-product-info">
            <h2>{product.name}</h2>
            <div className="show-rating">★★★★★</div>
            <p className="show-price">{product.price}</p>
            <p className="show-grocery-text">
              Get this item with your grocery order.
            </p>
            <button onClick={goBack} className="show-go-back-button">
              Go Back
            </button>
          </div>
        </div>
        <div className="show-dropdown-container">
          <div className="show-dropdown">
            <button className="show-dropbtn">Product Description</button>
            <div className="show-dropdown-content">
              {product.longDescription}
            </div>
          </div>
          <div className="show-dropdown">
            <button className="show-dropbtn">Nutrition and Ingredients</button>
            <div className="show-dropdown-content">
              {product.nutritionIngredients}
            </div>
          </div>
          <div className="show-dropdown">
            <button className="show-dropbtn">DISCLAIMER</button>
            <div className="show-dropdown-content">
              We do our best to be accurate with respect to the advertised
              ingredients, nutritional information, product images, and
              descriptions listed on our app/website...
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShowMore;
