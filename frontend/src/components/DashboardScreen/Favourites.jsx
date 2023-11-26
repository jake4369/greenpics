import { useGetFavouriteLocationsQuery } from "./../../slices/locationsSlice";

import Card from "./../../Components/Shared/Card";
import Loader from "./../../Components/Shared/Loader";
import Message from "../Shared/Message";

const Favourites = () => {
  const {
    data: locations,
    isLoading,
    isError,
    refetch,
  } = useGetFavouriteLocationsQuery();

  const cards = !isLoading
    ? locations.map((location) => (
        <Card key={location._id} location={location} refetch={refetch} />
      ))
    : [];

  return (
    <div className="favourites-screen">
      <h1>My Favourites</h1>

      <div className="favourites-screen__card-grid">
        {isLoading ? (
          <Loader />
        ) : cards.length ? (
          isError ? (
            <Message>An error occurred. Please refresh the browser.</Message>
          ) : (
            cards
          )
        ) : (
          <p className="no-data__message">
            You haven't added any locations to your favourites
          </p>
        )}
      </div>
    </div>
  );
};

export default Favourites;
