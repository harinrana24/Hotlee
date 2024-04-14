import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (acc, item) =>
        acc + item.quantity * parseFloat(item.price.replace(/\$/, "")),
      0
    );
  };

  return (
    <div className="cartss">
      <Navbar />
      <div className=" cart-page">
        <div className="container">
          <h2>Checkout List</h2>
          {cartItems.length > 0 ? (
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-details">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div>
                      <h3>{item.name}</h3>
                      <p className="cart-item-price">{item.price}</p>
                      <div className="quantity-controls">
                        <button
                          className="quantity-btn"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          className="quantity-btn"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
          <div className="cart-total">
            <h3>Total: ${calculateTotal().toFixed(2)}</h3>
          </div>
          <Link to="/payment" className="checkout-btn">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
