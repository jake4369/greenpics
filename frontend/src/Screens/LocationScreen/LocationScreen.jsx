import { useParams } from "react-router-dom";
import { useGetLocationQuery } from "../../slices/locationsSlice";
import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

import LocationDetails from "../../Components/LocationScreen/LocationDetails";
import PublicInfo from "../../Components/LocationScreen/PublicInfo";
import Review from "../../Components/LocationScreen/Review";
import ReviewForm from "../../Components/LocationScreen/ReviewForm";
import Loader from "./../../Components/Shared/Loader";
import GoogleMap from "./../../Components/Shared/GoogleMap";
import Message from "../../Components/Shared/Message";
import TopThree from "../../Components/Shared/TopThree";

const LocationScreen = () => {
  const { id: locationId } = useParams();

  const {
    data: location,
    isLoading: loadingLocation,
    isError,
    refetch,
  } = useGetLocationQuery(locationId);

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps?q=${location.lat},${location.lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="screen locationscreen">
      {loadingLocation ? (
        <Loader />
      ) : isError ? (
        <Message>An error occurred. Please refresh the browser.</Message>
      ) : (
        <div className="grid-row-1">
          <div className="grid-col-1">
            <Link to="/" className="back-btn">
              <FaArrowLeft className="back-btn__icon" /> Back
            </Link>
            <LocationDetails location={location} />
            <PublicInfo location={location} />
          </div>

          <div className="grid-col-2">
            <div className="locationscreen__map-container">
              {/* <GoogleMap
                lng={location.lng}
                lat={location.lat}
                customZoom={12}
      /> */}
              <button onClick={openGoogleMaps} className="google-maps-btn">
                Open Google Maps
              </button>
            </div>
          </div>
        </div>
      )}

      {!loadingLocation && (
        <section className="reviews__section">
          <div className="reviews-container">
            <h2>Reviews for {location.name}</h2>
            {location.reviews.length ? (
              location.reviews.map((review) => (
                <Review
                  key={review._id}
                  location={location}
                  review={review}
                  refetch={refetch}
                />
              ))
            ) : (
              <p>No reviews</p>
            )}
            <ReviewForm location={location} refetch={refetch} />
          </div>

          <div>
            <TopThree />
          </div>
        </section>
      )}
    </div>
  );
};

export default LocationScreen;
