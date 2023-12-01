// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Nav = ({ userInfo }) => {
//   const [activeTab, setActiveTab] = useState("");

//   const { pathname } = useLocation();

//   useEffect(() => {
//     // Define an array of paths you want to consider for setting the active tab
//     const paths = ["/", "/dashboard", "/login", "/register"];

//     // Find the index of the current pathname in the paths array
//     const index = paths.indexOf(pathname);

//     // Update the active tab based on the index or set it to an empty string if not found
//     setActiveTab(index !== -1 ? paths[index] : "");
//   }, [pathname]);

//   return (
//     <nav>
//       <ul className="desktop-nav">
//         <li>
//           <Link to="/" className={activeTab === "/" ? "active" : ""}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/dashboard/profile"
//             className={activeTab === "/dashboard" ? "active" : ""}
//           >
//             Dashboard
//           </Link>
//         </li>
//         <li>
//           {userInfo ? (
//             <Link to="/" className={activeTab === "/logout" ? "active" : ""}>
//               Logout
//             </Link>
//           ) : (
//             <Link
//               to="/login"
//               className={activeTab === "/login" ? "active" : ""}
//             >
//               Login
//             </Link>
//           )}
//         </li>
//         <li>
//           {!userInfo && (
//             <Link
//               to="/register"
//               className={activeTab === "/register" ? "active" : ""}
//             >
//               Register
//             </Link>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Nav;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ userInfo, handleLogout }) => {
  const [activeTab, setActiveTab] = useState("");

  const { pathname } = useLocation();

  useEffect(() => {
    // Define an array of paths you want to consider for setting the active tab
    const paths = ["/", "/dashboard", "/login", "/register", "/logout"];

    // Find the index of the current pathname in the paths array
    const index = paths.indexOf(pathname);

    // Update the active tab based on the index or set it to an empty string if not found
    setActiveTab(index !== -1 ? paths[index] : "");
  }, [pathname]);

  return (
    <nav>
      <ul className="desktop-nav">
        <li>
          <Link to="/" className={activeTab === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/profile"
            className={pathname.startsWith("/dashboard") ? "active" : ""}
          >
            Dashboard
          </Link>
        </li>
        <li>
          {userInfo ? (
            <Link
              to="/"
              className={activeTab === "/logout" ? "active" : ""}
              onClick={handleLogout}
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className={activeTab === "/login" ? "active" : ""}
            >
              Login
            </Link>
          )}
        </li>
        <li>
          {!userInfo && (
            <Link
              to="/register"
              className={activeTab === "/register" ? "active" : ""}
            >
              Register
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
