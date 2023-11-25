import { useGetLocationsQuery } from "../../slices/locationsSlice";
import Card from "../Shared/Card";

const CardGrid = () => {
  const { data: locations, isLoading, isError } = useGetLocationsQuery();

  const cards = !isLoading
    ? locations.map((location) => (
        <Card key={location._id} location={location} />
      ))
    : [];

  return (
    <section className="homescreen__card-grid">
      {isLoading ? <p>Loading...</p> : isError ? <p>{isError?.data?.message || isError?.error}</p> : cards}
    </section>
  );
};

export default CardGrid;
