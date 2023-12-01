import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <section className="hero">
      <div className="hero__text-content">
        <div className="hero__text-content">
          <h1>GreenSpace</h1>

          <p>
            Embark on a journey through lush forests, vibrant gardens, and
            breathtaking green landscapes. Whether you seek inspiration for your
            next adventure or wish to showcase your favorite green sanctuaries,
            let's celebrate the beauty of nature together.
          </p>

          {!userInfo && (
            <Link to="/login" className="hero__sign-in-btn">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <img src="/images/hero.png" alt="" className="hero__img" />
    </section>
  );
};

export default Hero;
