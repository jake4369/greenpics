import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";

import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import LocationScreen from "./Screens/LocationScreen/LocationScreen";
import DashboardScreen from "./Screens/DashboardScreen/DashboardScreen";
import Profile from "./Components/DashboardScreen/Profile";
import AddLocation from "./Components/DashboardScreen/AddLocation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/location/:id" element={<LocationScreen />} />

      <Route path="/dashboard" element={<DashboardScreen />}>
        <Route index={true} path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/addlocation" element={<AddLocation />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
