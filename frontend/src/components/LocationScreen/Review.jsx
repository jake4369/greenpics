import React, {useState} from "react";

const profile = {
  img: "/images/profile.jpeg",
  username: "Simone",
  review: " oqwoj, woqaO, jjpossadlasdho jdjsa hdcias oed"

}


const Review = () => {
  
return (
  <>
  <div className="review-container">
  <img className="profile-image--review" src={profile.img} alt="" />
  <h1>{profile.username}</h1>
  <p>{profile.review}</p>
  </div>
  
  </>
)
}

export default Review;