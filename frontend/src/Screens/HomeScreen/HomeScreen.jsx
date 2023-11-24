import Hero from "./../../Components/HomeScreen/Hero";
import CardGrid from "../../Components/HomeScreen/CardGrid";

const HomeScreen = () => {
  return (
    <div className="screen homescreen">
      <Hero />
      <h2>Find your dream green location</h2>
      <CardGrid />
    </div>
  );
};

export default HomeScreen;
