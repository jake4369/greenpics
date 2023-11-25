import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "./../../slices/usersApiSlice";
import { logout } from "./../../slices/authSlice";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="navBar-container">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/dashboard/profile" className="nav-link">
          Dashboard
        </Link>
        <Link to="/register" className="nav-link">
          Register
        </Link>
        {userInfo ? (
          <Link to="/" className="nav-link" onClick={handleLogout}>
            Logout
          </Link>
        ) : (
          <Link to="/login" className="nav-link">
            Login
          </Link>
        )}
      </nav>
    </>
  );
};
export default Header;
