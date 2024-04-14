import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Navbar from "../components/Navbar";
import "./Successorder.css";

const SuccessOrder = () => {
  return (
    <>
      <Navbar />
      <section className="success-order">
        <div className="container">
          <div className="message">
            <h2>Order Successful!</h2>
            <p>
              Your order has been placed successfully. Thank you for shopping
              with us!
            </p>
            <p>
              We are preparing your order and will send you a confirmation email
              shortly.
            </p>
            <Link to="/" className="button">
              Back to Home <HiOutlineArrowNarrowRight />
            </Link>
          </div>
        </div>
        <img
          src="/fg.webp"
          alt="Decoration"
          style={{ width: "600px", height: "auto", margin: "50px auto" }}
        />
      </section>
    </>
  );
};

export default SuccessOrder;
