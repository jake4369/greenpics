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
import MyLocations from "./Components/DashboardScreen/MyLocations";
import Favourites from "./Components/DashboardScreen/Favourites";
import EditProfile from "./Components/DashboardScreen/EditProfile";

import LoginScreen from "./Screens/AuthScreens/LoginScreen";
import RegisterScreen from "./Screens/AuthScreens/RegisterScreen";
import PrivateRoute from "./Components/PrivateRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/location/:id" element={<LocationScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardScreen />}>
          <Route index={true} path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/addlocation" element={<AddLocation />} />
          <Route path="/dashboard/mylocations" element={<MyLocations />} />
          <Route path="/dashboard/favourites" element={<Favourites />} />
          <Route path="/dashboard/edit" element={<EditProfile />} />
        </Route>
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
