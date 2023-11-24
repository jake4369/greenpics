import React from "react";

const Card = ({ location }) => {
  return (
    <div className="location-card">
      <img src={location.img[0]} alt="" className="location-card__img" />
      <div className="location-card__text-content">
        <p className="location-card__name">{location.name}</p>
        <p className="location-card__county">{location.county}</p>
        <p className="location-card__reviews">
          {location.reviews.length} Reviews
        </p>
      </div>
    </div>
  );
};

export default Card;
