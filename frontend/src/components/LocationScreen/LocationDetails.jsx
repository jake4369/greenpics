const LocationDetails = ({ location }) => {
  return (
    <div className="locationscreen__details">
      <h1>{location.name}</h1>
      <img src={location.img} alt="" />
      <p className="locationscreen__details__county">{location.county}</p>
      <p className="locationscreen__details__description">
        {location.description}
      </p>
    </div>
  );
};

export default LocationDetails;
