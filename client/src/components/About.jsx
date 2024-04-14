import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">About Us</h1>
            <p>The only thing we are serious is about Food</p>
          </div>

          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            exercitationem ex doloribus natus aliquam perspiciatis illum dolor
            rem dolores id sint odit possimus, assumenda dolorum similique
            nostrum quia Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Odio sunt culpa amet quos deserunt sapiente ratione ad
            reiciendis. Ducimus, debitis! praesentium ullam, repudiandae
            pariatur beatae delectus ipsum? Assumenda ad doloribus deserunt
            nihil ipsa, porro repellat ratione, qui amet temporibus non atque
            explicabo?{" "}
          </p>
          <Link to={"/"}>
            Explore Our Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="Aboutr" />
        </div>
      </div>
    </section>
  );
};

export default About;
