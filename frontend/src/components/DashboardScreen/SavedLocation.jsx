import { Link } from "react-router-dom";

import { useDeleteLocationMutation } from "./../../slices/locationsSlice";
import { FaEdit, FaTrash } from "react-icons/fa";

import Loader from "./../Shared/Loader";

const SavedLocation = ({ location, refetch }) => {
  const [deleteLocation, { isLoading: loadingDelete, isError: errorDeleting }] =
    useDeleteLocationMutation();

  const handleDelete = async (locationId) => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteLocation(locationId);
        refetch();
      } catch (error) {}
    }
  };
  return (
    <>
      {loadingDelete ? (
        <Loader />
      ) : errorDeleting ? (
        <p>Error...</p>
      ) : (
        <div className="saved-location">
          <img src={location.img} alt="" />
          <div className="saved-location__text-content">
            <Link to={`/location/${location._id}`}>
              <p className="name">{location.name}</p>
            </Link>
            <p className="county">{location.county}</p>
          </div>
          <div className="saved-location__btns">
            {/* <button>
        <FaEdit />
      </button> */}
            <button
              className="delete-location-btn"
              onClick={() => handleDelete(location._id)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SavedLocation;
