import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navBar-container">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
        <Link to="/register" className="nav-link">
          Register
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </nav>
    </>
  );
};
export default Header;
