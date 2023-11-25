import React, { useState } from "react";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [county, setCounty] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword){
      setError("Password is not the same")
      setShowConfirmation(false)
      setIsSubmitting(false)
    } else {
      setIsSubmitting(true);
      setShowConfirmation(true);
      console.log(
        "name",
        name,
        "userName",
        userName,
        "email",
        email,
        "password",
        password,
        "county",
        county,
      
      );
    }
   
  };

  return (
    <div className="screen authscreen">
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          placeholder="name"
          disabled={isSubmitting}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>username</label>
        <input
          type="text"
          placeholder="username"
          disabled={isSubmitting}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label>email</label>
        <input
          type="email"
          required
          placeholder="email"
          disabled={isSubmitting}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>password</label>
        <input
          type="password"
          required
          placeholder="password"
          disabled={isSubmitting}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>confirm password</label>
        <input
          type="password"
          required
          placeholder="confirm password"
          disabled={isSubmitting}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <label>county</label>
        <input
          type="text"
          required
          placeholder="county"
          disabled={isSubmitting}
          value={county}
          onChange={(e) => setCounty(e.target.value)}
        />

        <button type="submit" className="login-btn" disabled={isSubmitting} >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
      {error && <p>{error}</p>}
      {showConfirmation && <p>Profile posted successfully!</p>}
        
      </form>
    </div>
  );
};

export default RegisterScreen;
