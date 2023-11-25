import { Outlet } from "react-router-dom";

import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
