import { useGetLocationsQuery } from "../../slices/locationsSlice";

import Card from "../Shared/Card";
import Loader from "../Shared/Loader";
import Message from "../Shared/Message";

const CardGrid = () => {
  const { data: locations, isLoading, isError } = useGetLocationsQuery();

  const cards = !isLoading
    ? locations.map((location) => (
        <Card key={location._id} location={location} />
      ))
    : [];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message>An error occurred. Please refresh the browser.</Message>
      ) : (
        <section className="homescreen__card-grid">{cards}</section>
      )}
    </>
  );
};

export default CardGrid;
