import { useParams } from "react-router-dom";
import { useGetLocationQuery } from "../../slices/locationsSlice";
import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

import LocationDetails from "../../Components/LocationScreen/LocationDetails";
import PublicInfo from "../../Components/LocationScreen/PublicInfo";
import Review from "../../Components/LocationScreen/Review"

const LocationScreen = () => {
  const { id: locationId } = useParams();

  const {
    data: location,
    isLoading: loadingLocation,
    isError,
  } = useGetLocationQuery(locationId);

  return (
    <div className="screen locationscreen">
      {loadingLocation ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error...</p>
      ) : (
        <div className="grid-row-1">
          <div className="grid-col-1">
            <Link to="/" className="back-btn">
              <FaArrowLeft className="back-btn__icon" /> Back
            </Link>
            <LocationDetails location={location} />
            <PublicInfo location={location} />
            
          </div>

          <div className="grid-col-2"></div>
        </div>
      )}

      <div className="grid-row-2">
      <Review />
      </div>
     
    </div>
  );
};

export default LocationScreen;
