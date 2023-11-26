import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useGetUserByIdQuery,
  useUpdateUserProfileMutation,
} from "./../../slices/usersApiSlice";

import Loader from "./../Shared/Loader";
import Message from "../Shared/Message";

const EditProfile = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const [profileImage, setProfileImage] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [county, setCounty] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const navigate = useNavigate();

  const {
    data: user,
    isLoading,
    isError,
    refetch,
  } = useGetUserByIdQuery(userInfo._id);

  const [updateUserProfile, { isLoading: isUpdating, isError: errorUpdating }] =
    useUpdateUserProfileMutation();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setUsername(user.username);
      setCounty(user.county);
      setEmail(user.email);
    }
  }, [userInfo, user, userInfo.name, userInfo.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      _id: user._id,
      profileImage,
      name,
      username,
      county,
      email,
      password,
      bio,
    };

    try {
      const res = await updateUserProfile(data).unwrap();
      toast.success("Successfully updated profile");
      refetch();
      navigate("/dashboard/profile");
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  return (
    <div className="edit-profile">
      <h1>Edit Profile</h1>

      {isUpdating ? (
        <Loader />
      ) : errorUpdating ? (
        <Message>An error occurred. Please refresh the browser.</Message>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Profile Image</label>
          <input
            type="text"
            placeholder="Image url"
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.value)}
          />

          <label>Name</label>
          <input
            type="text"
            placeholder="Edit name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Username</label>
          <input
            type="text"
            placeholder="Edit username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>County</label>
          <input
            type="text"
            placeholder="Edit county"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Edit username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Change Password</label>
          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Add Bio</label>
          <textarea
            placeholder="Tell us a little about yourself..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>

          <button className="submit-btn" disabled={isUpdating}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default EditProfile;
