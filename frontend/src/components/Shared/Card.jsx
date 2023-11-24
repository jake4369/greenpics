import { Link } from "react-router-dom";

const Card = ({ location }) => {
  return (
    <div className="location-card">
      <img src={location.img[0]} alt="" className="location-card__img" />
      <div className="location-card__text-content">
        <Link to={`/location/${location._id}`}>
          <p className="location-card__name">{location.name}</p>
        </Link>
        <p className="location-card__county">{location.county}</p>
        <p className="location-card__reviews">
          {location.reviews.length} Reviews
        </p>
      </div>
    </div>
  );
};

export default Card;
