import React, { useState } from "react";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [county, setCounty] = useState("");
  const [image, setImage] = useState([]);
  const [bio, setBio] = useState("");




const handleSubmit = e => {
  e.preventDefault()
  console.log("name", name, "userName", userName, "email", 
  email, "password",password, "county", county, "bio", bio);
  
}

  return (
    <div className="screen authscreen">
      <h1>Register</h1>

      <form onSubmit={handleSubmit} >
        <label>name</label>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>username</label>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label>email</label>
        <input
          type="email"
          required
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>password</label>
        <input
          type="password"
          required
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>county</label>
        <input
          type="text"
          required
          placeholder="county"
          value={county}
          onChange={(e) => setCounty(e.target.value)}
        />
        <label>upload your image</label>
         <input
          type="file"
          // required
          accept="image/*"
          value={image}
          
          onChange={(e) => setImage(e.target.files)}
        />
        <label>Bio</label>
        <textarea
        value={bio}
        placeholder="Write your bio.."
        required
        onChange={(e) => setBio(e.target.value)}
        >

        </textarea>

        <button type="submit" className="login-btn">Submit</button>
       
      </form>
    </div>
  );
};

export default RegisterScreen;


