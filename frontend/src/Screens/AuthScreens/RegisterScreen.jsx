import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../../Components/Shared/Loader";
import { useRegisterMutation } from "./../../slices/usersApiSlice";
import { setCredentials } from "./../../slices/authSlice";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [county, setCounty] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading, isError }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return;
    } else {
      try {
        const res = await register({
          name,
          email,
          username,
          county,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (error) {
        console.log(error?.data.message || error?.error);
      }
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>username</label>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <label>confirm password</label>
        <input
          type="password"
          required
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <label>county</label>
        <input
          type="text"
          required
          placeholder="county"
          value={county}
          onChange={(e) => setCounty(e.target.value)}
        />

        <button type="submit" className="login-btn" disabled={isLoading}>
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default RegisterScreen;
