import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navBar-container">
        <Link
          to="/"
          className="nav-link"
          href="frontend/src/components/screens/HomeScreen/HomeScreen.jsx"
        >
          Home
        </Link>
        <Link
          to="/profile"
          className="nav-link"
          href="frontend/src/components/screens/ProfileScreen/ProfileScreen.jsx"
        >
          Profile
        </Link>
        <Link
          to="/register"
          className="nav-link"
          href="frontend/src/components/screens/AuthScreens/RegisterScreen.jsx"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="nav-link"
          href="frontend/src/components/screens/AuthScreens/LoginScreen.jsx"
        >
          Login
        </Link>
      </nav>
    </>
  );
};
export default Header;
