import { useGetSavedLocationsQuery } from "./../../slices/locationsSlice";

import SavedLocation from "./SavedLocation";
import Loader from "./../Shared/Loader";

const MyLocations = () => {
  const {
    data: savedLocations,
    isLoading,
    isError,
    refetch,
  } = useGetSavedLocationsQuery();

  return (
    <div className="my-locationsscreen">
      <h1>My Locations</h1>

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p>Error...</p>
      ) : (
        <div className="saved-locations__container">
          {savedLocations.map((location) => (
            <SavedLocation
              key={location._id}
              location={location}
              refetch={refetch}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLocations;
