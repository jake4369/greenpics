import { Link } from "react-router-dom";
import { useAddFavouriteMutation } from "./../../slices/locationsSlice";

const Card = ({ location }) => {
  const [addFavourite, { isLoading: isSubmitting, isError }] =
    useAddFavouriteMutation();

  const handleAddFavourite = async (id) => {
    console.log(id);
    try {
      // Trigger the mutation
      const result = await addFavourite(id);

      // Handle the result if needed
      console.log(result); // Log the result or update state as needed
    } catch (error) {
      // Handle errors
      console.error("Error adding favourite:", error);
    }
  };

  return (
    <div className="location-card">
      <img src={location.img} alt="" className="location-card__img" />
      <div className="location-card__text-content">
        <Link to={`/location/${location._id}`}>
          <p className="location-card__name">{location.name}</p>
        </Link>
        <p className="location-card__county">{location.county}</p>
        <p className="location-card__reviews">
          {location.reviews.length} Reviews
        </p>
        <button onClick={() => handleAddFavourite(location._id)}>Add</button>
      </div>
    </div>
  );
};

export default Card;
