import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "./../../slices/usersApiSlice";
import { logout } from "./../../slices/authSlice";
import { toast } from "react-toastify";

import Nav from "./Nav";

const Footer = () => {
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
    <footer>
      <Nav />
    </footer>
  );
};

export default Footer;
