import React, { useState } from "react";

const profile = {
  img: "/images/profile.jpeg",
  username: "Simone",
  review: " oqwoj, woqaO, jjpossadlasdho jdjsa hdcias oed efhadshowednadsl, dsanjsd , aidjawwndlaksa jsa  udckajba icadsn asl jcadkm adkadcas",
};

const Review = () => {
  return (
    <>
      <div className="review-container">
      <img className="profile-image--review" src={profile.img} alt="" />
        <h1 className="user">{profile.username}</h1>
        
        <p className="review">{profile.review}</p>
      </div>
    </>
  );
};

export default Review;
