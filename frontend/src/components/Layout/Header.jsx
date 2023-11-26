import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "./../../slices/usersApiSlice";
import { logout } from "./../../slices/authSlice";
import { toast } from "react-toastify";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      toast.success("Logout successful");
      dispatch(logout());
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

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
          {!userInfo && (
            <Link to="/register" className="nav-link">
              Register
            </Link>
          )}
          {userInfo ? (
            <Link to="/" className="nav-link" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Link to="/login" className="nav-link">
              Login
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};
export default Header;
