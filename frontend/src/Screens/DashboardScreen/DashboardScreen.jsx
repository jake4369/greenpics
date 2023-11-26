import { Outlet } from "react-router-dom";

import Sidebar from "../../components/DashboardScreen/Sidebar";

const DashboardScreen = () => {
  return (
    <div className="screen dashboardscreen">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashboardScreen;
