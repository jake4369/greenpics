import Hero from "../../components/HomeScreen/Hero";
import CardGrid from "../../components/HomeScreen/CardGrid";

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
