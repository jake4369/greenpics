import { useState } from "react";

const EditProfile = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [county, setCounty] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      img,
      name,
      username,
      county,
      email,
      password,
      bio,
    };

    console.log(data);
  };

  return (
    <div className="edit-profile">
      <h1>Edit Profile</h1>

      <form onSubmit={handleSubmit}>
        <label>Profile Image</label>
        <input
          type="text"
          placeholder="Change profile image"
          value={img}
          onChange={(e) => setImg(e.target.value)}
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

        <button className="submit-btn ">Submit</button>
      </form>
    </div>
  );
};

export default EditProfile;
