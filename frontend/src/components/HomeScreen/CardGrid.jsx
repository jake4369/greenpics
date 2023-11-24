import locations from "./../../data/locations";
import Card from "../Shared/Card";

const CardGrid = () => {
  console.log(locations);
  const cards = locations.map((location) => (
    <Card key={location._id} location={location} />
  ));
  return <section className="homescreen__card-grid">{cards}</section>;
};

export default CardGrid;
