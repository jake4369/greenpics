import { useSelector } from "react-redux";
import { useGetUserByIdQuery } from "../../slices/usersApiSlice";

import Loader from "../Shared/Loader";
import Message from "../Shared/Message";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);

  // Add a check to ensure userInfo exists before accessing _id
  const userId = userInfo ? userInfo._id : null;

  const { data: user, isLoading, isError } = useGetUserByIdQuery(userId);

  return (
    <div className="profile">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message>An error occurred. Please refresh the browser.</Message>
      ) : (
        <>
          <h1>My Profile</h1>
          {user && ( // Add a check to ensure user exists before accessing its properties
            <>
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
        </>
      )}
    </div>
  );
};

export default Profile;
