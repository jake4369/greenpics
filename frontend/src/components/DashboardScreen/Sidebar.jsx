import { Link } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { MdLibraryAdd, MdOutlineFavorite } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="mobile-sidebar">
        <Link to="/dashboard/profile">
          <ImProfile className="mobile-sidebar__icon" />
        </Link>
        <Link to="/dashboard/addlocation">
          <MdLibraryAdd className="mobile-sidebar__icon" />
        </Link>
        <Link to="/dashboard/mylocations">
          <FaLocationDot className="mobile-sidebar__icon" />
        </Link>
        <Link to="/dashboard/favourites">
          <MdOutlineFavorite className="mobile-sidebar__icon" />
        </Link>
        <Link to="/dashboard/edit">
          <FaEdit className="mobile-sidebar__icon" />
        </Link>
      </div>

      <div className="desktop-sidebar">
        <Link to="/dashboard/profile">
          <ImProfile className="sidebar-icon" /> Profile
        </Link>
        <Link to="/dashboard/addlocation">
          <MdLibraryAdd className="sidebar-icon" /> Add Location
        </Link>
        <Link to="/dashboard/mylocations">
          <FaLocationDot className="sidebar-icon" /> My Locations
        </Link>
        <Link to="/dashboard/favourites">
          <MdOutlineFavorite className="sidebar-icon" /> My Favourites
        </Link>
        <Link to="/dashboard/edit">
          <FaEdit className="sidebar-icon" /> Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
