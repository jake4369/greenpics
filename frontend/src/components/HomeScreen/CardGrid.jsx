import { useGetLocationsQuery } from "../../slices/locationsSlice";

import Card from "../Shared/Card";
import Loader from "./../Shared/Loader";

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
        <p>Error...</p>
      ) : (
        <section className="homescreen__card-grid">{cards}</section>
      )}
    </>
  );
};

export default CardGrid;
