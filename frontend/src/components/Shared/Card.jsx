import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useAddFavouriteMutation,
  useRemoveFavouriteMutation,
} from "../../slices/locationsSlice";
import { useGetUserByIdQuery } from "../../slices/usersApiSlice";
import { FaTrash } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import Rating from "./Rating";

const Card = ({ location, refetch }) => {
  const { userInfo } = useSelector((state) => state.auth);

  const {
    data: user,
    isLoading,
    isError,
    refetch: refetchUser,
  } = useGetUserByIdQuery(userInfo?._id);
  const userFavourites = !isLoading ? user?.favourites : [];

  const [addFavourite, { isLoading: savingFavourite, isError: errorSaving }] =
    useAddFavouriteMutation();

  const [removeFavourite, { isLoading: removing, isError: errorRemoving }] =
    useRemoveFavouriteMutation();

  const { pathname } = useLocation();

  const handleAddFavourite = async (id) => {
    try {
      const result = await addFavourite(id);
      toast.success("Added to Favourite");
      refetchUser();
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  const handleRemoveFavorite = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        const result = await removeFavourite(id);
        toast.success("Successfully deleted");
        refetch();
        refetchUser();
      } catch (error) {
        toast.error(error?.data?.message || error.message);
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
        <Rating value={location.rating} />
        <div className="location-card__flex-container">
          {pathname === "/dashboard/favourites" ? (
            <button
              className="location-card__btn remove-favourite-btn"
              onClick={() => handleRemoveFavorite(location._id)}
            >
              <FaTrash /> Remove favourite
            </button>
          ) : (
            <p className="location-card__reviews">
              {location.reviews.length} Reviews
            </p>
          )}
          {userInfo && pathname === "/" && (
            <button
              className="location-card__btn add-favourite-btn"
              onClick={() => handleAddFavourite(location._id)}
            >
              {userFavourites?.includes(location?._id) ? (
                <FaHeart />
              ) : (
                <CiHeart />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
