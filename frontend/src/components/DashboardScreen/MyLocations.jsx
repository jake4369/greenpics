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
      <div className="my-locationsscreen">
        <h1>My Locations</h1>

        <div className="saved-locations__container">
          {isLoading ? (
            <Loader />
          ) : savedLocations.length ? (
            isError ? (
              <p>Error..</p>
            ) : (
              savedLocations.map((location) => (
                <SavedLocation
                  key={location._id}
                  location={location}
                  refetch={refetch}
                />
              ))
            )
          ) : (
            <p>You haven't added any locations</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyLocations;
