import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Success = () => {
  const location = useLocation();
  const { firstName, lastName, date, time, guest } = location.state || {};

  return (
    <>
      <section className="success">
        <div className="containeer">
          <div className="message">
            <h2>Reservation Successful!</h2>
            {location.state ? (
              <p>
                Thank you, {firstName} {lastName}, for making a reservation with
                us. Your reservation is confirmed for {date} at {time} with{" "}
                {guest} guests. We look forward to seeing you on {date} at{" "}
                {time} on 425 bloor street W, Toronto. For any inquiries or
                changes, please contact us at Mauraresturant@gmail.com or
                2898891440.
              </p>
            ) : (
              <p>
                Your reservation details are not available. Please contact us
                for assistance.
              </p>
            )}
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

export default Success;
