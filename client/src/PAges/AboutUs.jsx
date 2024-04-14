import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <div className="abb">
      <Navbar />

      <div className="about-section">
        <h1>Welcome to Foody Flames Restaurant</h1>
        <p>
          At Foody Flames Restaurant, we embark on a culinary journey that takes
          you through the heart of traditional flavors to the edge of culinary
          innovation. Established in the vibrant cityscape, Foody Flames stands
          as a beacon of gastronomic excellence, inspired by the rich diversity
          of global cuisine.
        </p>
        <p>
          Our story begins with a vision—to create a dining experience that
          transcends the ordinary, where each dish tells a story of flavors,
          cultures, and traditions. Founded by culinary enthusiasts with a
          passion for exploration, Foody Flames has become a sanctuary for those
          who seek the extraordinary.
        </p>
        <p>
          Our menu, a carefully curated anthology of dishes, pays homage to the
          classics while embracing the new, each crafted with the finest
          ingredients sourced from the corners of the globe. From the aromatic
          streets of Bangkok to the vibrant markets of Marrakech, we bring the
          world to your plate.
        </p>
        <p>
          Foody Flames is not just about food; it's about the experience. Our
          ambiance, designed with elements inspired by the places we love,
          offers a warm, inviting atmosphere that complements the culinary
          journey. It's a place where moments are cherished, and memories are
          woven into the tapestry of flavors that define us.
        </p>
        <p>
          We invite you to join us at Foody Flames, where every visit is more
          than a meal—it's a journey to be savored.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
