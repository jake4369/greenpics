import { useSelector } from "react-redux";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="profile">
      <h1>My Profile</h1>
      <img src="/images/profile.jpeg" alt="" className="profile__img" />
      <p className="profile__username"></p>

      <p className="profile__name">Jake Samuels</p>
      <p className="profile__email">jake@email.com</p>

      <h2>About Me</h2>
      <p className="profile__bio">
        My name is Jake, and I love to find beautiful and amazing places to
        explore
      </p>
    </div>
  );
};

export default Profile;
