import { useSelector } from "react-redux";
import { useGetUserByIdQuery } from "../../slices/usersApiSlice";

import Loader from "./../Shared/Loader";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const { data: user, isLoading, isError } = useGetUserByIdQuery(userInfo._id);

  return (
    <div className="profile">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p>Error...</p>
      ) : (
        <>
          <h1>My Profile</h1>
          <img src={user.profileImage} alt="" className="profile__img" />
          <p className="profile__username">{user.username}</p>

          <p className="profile__name">{user.name}</p>
          <p className="profile__email">{user.email}</p>

          <h2>About Me</h2>
          {user.bio !== "" ? (
            <p className="profile__bio">{user.bio}</p>
          ) : (
            <p>Edit profile to add your bio</p>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
