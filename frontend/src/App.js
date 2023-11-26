import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default App;
