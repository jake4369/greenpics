import { useGetLocationsQuery } from "../../slices/locationsSlice";
import Card from "./Card";

const TopFour = () => {
  const { data: locations, isLoading, isError } = useGetLocationsQuery();

  const sortedLocations = !isLoading
    ? locations.slice(0, 4).sort((a, b) => b.numReviews - a.numReviews)
    : [];

  return (
    <div className="top-four">
      {sortedLocations.map((location) => (
        <Card key={location._id} location={location} />
      ))}
    </div>
  );
};

export default TopFour;
