import { Outlet } from "react-router-dom";

import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";

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
