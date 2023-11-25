import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navBar-container">
      <div className="link-container">
      <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/dashboard/profile" className="nav-link">
          Dashboard
        </Link>
        <Link to="/register" className="nav-link">
          Register
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </div>
        
      </nav>
    </>
  );
};
export default Header;
