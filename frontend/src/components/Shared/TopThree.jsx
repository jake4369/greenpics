import { useGetLocationsQuery } from "../../slices/locationsSlice";
import Card from "./Card";

const TopThree = () => {
  const { data: locations, isLoading, isError } = useGetLocationsQuery();
  console.log(locations);

  return <div>Top Three</div>;
};

export default TopThree;
