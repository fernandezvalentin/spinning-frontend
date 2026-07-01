import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-1 w-full flex flex-col pt-20">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
