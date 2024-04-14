import products from "../productsData"; // Adjust the import path as necessary
import Navbar from "../components/Navbar"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";

function ProductList({ cartItems, setCartItems }) {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate(); // Instantiate the useNavigate hook

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000); // 3000 milliseconds = 3 seconds
  };

  const viewDetails = (id) => {
    navigate(`/product/${id}`); // This should match the route path to ShowMore
  };

  const handleViewCart = () => {
    navigate("/cart", { state: { cartItems } }); // Pass cartItems as state
  };

  return (
    <div className="pro">
      <Navbar />
      <div className="product">
        <div className="containe">
          <h1>Start Ordering</h1>
          <h5>Feast Your Eyes, Treat Your Taste.</h5>
          {showAlert && <div className="alert">Item added Successfully</div>}
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="prodi">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h2>{product.name}</h2>
                  <p className="product-price">{product.price}</p>
                  <div className="product-actions">
                    <button
                      className="btn-add"
                      onClick={() => addToCart(product)}
                    >
                      {" "}
                      Add to Cart
                    </button>
                    <button
                      className="btn-details"
                      onClick={() => viewDetails(product.id)}
                    >
                      See More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;
