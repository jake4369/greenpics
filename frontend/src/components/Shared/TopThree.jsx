import { useGetLocationsQuery } from "../../slices/locationsSlice";
import Card from "./Card";

const TopThree = () => {
  const { data: locations, isLoading, isError } = useGetLocationsQuery();



  const sortedLocations = !isLoading
    ? locations.slice(0,3).sort((a, b) => b.numReviews - a.numReviews)
    : [];
  

  return (

    sortedLocations.map(location => (<Card key={location._id} location={location}/>))

)}


  console.log(locations);

  return <div>Top Three</div>;
};


export default TopThree;
