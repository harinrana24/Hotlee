import { useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  const isProductDetailPage = location.pathname.includes("/product/");

  return (
    <nav>
      <div className="logo">Foody Flames</div>
      <div className={show ? "navLinks showMenu" : "navLinks"}>
        <div className="links">
          <RouterLink to="/">HOME</RouterLink>
          <RouterLink to="/About">About US</RouterLink>
          <RouterLink to="/team">Team</RouterLink>
          <RouterLink to="/reservation">Reservation</RouterLink>
        </div>

        <RouterLink to="/ProductList" className="menuBtn">
          Our Menu
        </RouterLink>
        {(location.pathname === "/ProductList" || isProductDetailPage) && (
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
