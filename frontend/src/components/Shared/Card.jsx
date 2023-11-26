import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  useAddFavouriteMutation,
  useRemoveFavouriteMutation,
} from "./../../slices/locationsSlice";
import { useGetUserByIdQuery } from "./../../slices/usersApiSlice";
import { FaTrash } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

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

      refetchUser();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveFavorite = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        const result = await removeFavourite(id);
        refetch();
        refetchUser();
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
          {pathname === "/" && (
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
