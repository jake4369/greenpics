import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const profile = {
  img: "/images/profile.jpeg",
  username: "Simone",
  review:
    " oqwoj, woqaO, jjpossadlasdho jdjsa hdcias oed efhadshowednadsl, dsanjsd , aidjawwndlaksa jsa  udckajba icadsn asl jcadkm adkadcas",
};

const Review = ({ review }) => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <div className="review-container">
        <img
          className="profile-image--review"
          src={userInfo.profileImage}
          alt=""
        />
        <h1 className="user">{review.username}</h1>

        <p className="review">{review.comment}</p>

        <p>{review.createdAt.split("T")[0]}</p>
      </div>
    </>
  );
};

export default Review;
