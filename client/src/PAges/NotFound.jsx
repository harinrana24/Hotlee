import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="notFound">
      <div className="container">
        <img src="/notFound.svg" alt="NotFound" />
        <h1>LOOK&#39;S LIKE YOU&#39;RE LOST</h1>
        <p>WE CAN&#39;T SEEM TO FIND THE PAGE YOU&#39;RE LOOKING FOR</p>
        <Link to={"/"}>
          BACK TO HOME{" "}
          <span>
            <HiOutlineArrowNarrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
