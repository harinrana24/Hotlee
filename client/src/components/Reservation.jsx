import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useLocation, Link as RouterLink } from "react-router-dom";
import Navbar from "../components/Navbar"; // Adjust the import path as necessary
import Footer from "./Footer"; // Adjust the import path as necessary
import { GiHamburgerMenu } from "react-icons/gi";

function Reservation() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState("");

  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();

    function convertTo12HourFormat(timeString) {
      // Split the time string into hours and minutes
      let [hours, minutes] = timeString.split(":").map(Number);
      // Determine AM or PM suffix
      const ampm = hours >= 12 ? "PM" : "AM";
      // Convert hours to 12-hour format
      hours = hours % 12;
      // Convert "0" hour to "12"
      hours = hours ? hours : 12;
      // Pad the hours with leading zero if necessary
      hours = hours < 10 ? "0" + hours : hours;
      // Return the formatted string
      return `${hours}:${minutes} ${ampm}`;
    }

    const convertedTime = convertTo12HourFormat(time);

    try {
      const { data } = await axios.post(
        "https://localhost:4000/reservation/send",
        { firstName, lastName, email, date, time: convertedTime, phone, guest },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      navigate("/success", {
        state: {
          firstName: firstName,
          lastName: lastName,
          date: date,
          time: convertedTime,
          guest: guest,
          email: email,
          phone: phone,
        },
      });
      setFirstName("");
      setLastName("");
      setDate("");
      setEmail("");
      setPhone(0), setTime("");
      setGuest("");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <section className="reservation" id="reservation">
          <div className="container">
            <div className="banner">
              <img src="/reservation.png" alt="res" />
            </div>
            <div className="banner">
              <div className="reservation_form_box">
                <h1>MAKE A RESERVATION</h1>
                <p>For Further Questions, Please Call</p>
                <form id="resrve">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      placeholder="Date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <input
                      type="time"
                      placeholder="Time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="phone"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Guest"
                      value={guest}
                      onChange={(e) => setGuest(e.target.value)}
                    />
                    <button type="submit" onClick={handleReservation}>
                      RESERVE NOW{" "}
                      <span>
                        <HiOutlineArrowNarrowRight />
                      </span>{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Reservation;
