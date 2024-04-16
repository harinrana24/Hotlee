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
          In the heart of every kitchen, there's a captivating spectacle: the dance of foody flames. These flames are more than just sources of heat; they're the catalysts of culinary creativity, transforming raw ingredients into mouthwatering dishes that delight the senses. At Foody Flames, we embrace the power of these flames to elevate the dining experience. Our chefs skillfully wield their expertise, harnessing the energy of the flames to craft dishes that are both innovative and delicious. From the gentle simmer of sauces to the intense sear of meats, every dish is infused with the unmistakable essence of foody flames. Join us on a culinary journey where flavor reigns supreme and every bite tells a story. Experience the magic of foody flames at Foody Flames, where every meal is a celebration of taste and tradition.{" "}
          </p>
          <Link to={"/productlist"}>
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
