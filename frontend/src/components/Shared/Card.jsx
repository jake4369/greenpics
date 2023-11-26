import { Link, useLocation } from "react-router-dom";
import {
  useAddFavouriteMutation,
  useRemoveFavouriteMutation,
} from "./../../slices/locationsSlice";
import { FaTrash } from "react-icons/fa";

const Card = ({ location, refetch }) => {
  const [addFavourite, { isLoading: savingFavourite, isError: errorSaving }] =
    useAddFavouriteMutation();

  const [removeFavourite, { isLoading: removing, isError: errorRemoving }] =
    useRemoveFavouriteMutation();

  const { pathname } = useLocation();

  const handleAddFavourite = async (id) => {
    try {
      const result = await addFavourite(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFavorite = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        const result = await removeFavourite(id);
        refetch();
      } catch (error) {
        console.log(error);
      }
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
        {pathname === "/" ? (
          <button onClick={() => handleAddFavourite(location._id)}>Add</button>
        ) : pathname === "/dashboard/favourites" ? (
          <button
            className="remove-favourite-btn"
            onClick={() => handleRemoveFavorite(location._id)}
          >
            <FaTrash />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Card;
