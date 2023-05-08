import React from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";

const App = () => {
  const location = useLocation();

  // Check if the current location is the home page
  const isHome = location.pathname === "/";

  return (
    <div id={isHome ? "" : "master"}>
      {!isHome && <Navbar />}
      <AppRoutes />
    </div>
  );
};

export default App;
