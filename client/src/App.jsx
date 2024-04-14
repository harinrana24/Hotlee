import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./PAges/Home";
import Success from "./PAges/Success";
import NotFound from "./PAges/NotFound";
import ProductList from "./PAges/ProductList";
import Cart from "./PAges/Cart";
import AboutUs from "./PAges/AboutUs";
import Teams from "./PAges/Teams";
import ShowMore from "./PAges/ShowMore";
import PaymentPage from "./PAges/PaymentPage";
import Reservation from "./components/Reservation";
import SuccessOrder from "./PAges/SuccessOrder";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/success-order" element={<SuccessOrder />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product/:id" element={<ShowMore />} />
        <Route path="/payment" element={<PaymentPage />} />{" "}
        <Route
          path="/productlist"
          element={
            <ProductList cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
