import { useState, useEffect, useRef } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const typedSequenceRef = useRef('');

  useEffect(() => {
    const handleKeyPress = (event) => {
      typedSequenceRef.current += event.key;
      console.log("Typed sequence:", typedSequenceRef.current); // Log the typed sequence
      if (typedSequenceRef.current.includes('mumbaiisthebest')) {
        setButtonVisible(true);
        typedSequenceRef.current = ''; // Clear the sequence
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <nav>
      <div className="logo" onClick={() => setButtonVisible(false)}>Foody Flames</div>
      <div className={show ? "navLinks showMenu" : "navLinks"}>
        <div className="links">
          <RouterLink to="/">HOME</RouterLink>
          <RouterLink to="/About">About US</RouterLink>
          <RouterLink to="/team">Team</RouterLink>
          <RouterLink to="/reservation">Reservation</RouterLink>
          {buttonVisible && (<RouterLink  to="/reservations">Reservations</RouterLink>)}
        </div>

        <RouterLink to="/ProductList" className="menuBtn">
          Our Menu
        </RouterLink>
        {(location.pathname === "/ProductList" || location.pathname.includes("/product/")) && (
          <RouterLink className="menuBtn" to="/Cart">
            CART
          </RouterLink>
        )}
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
