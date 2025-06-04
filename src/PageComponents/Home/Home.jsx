import React from "react";
import Welcome from "./Welcome";
import DashboardImg from "./DashboardImg";

function Home() {

  return (
    <div className="overflow-clip w-full lg:h-screen relative">
      <Welcome />
      <DashboardImg />
    </div>
  );
}

export default Home;
