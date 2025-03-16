import React, { useEffect } from "react";
import Navbar from "./PageComponents/Navbar";
import Welcome from "./PageComponents/Home/Welcome";
import DashboardImg from "./PageComponents/Home/DashboardImg";

function Home() {
  useEffect(() => {
    document.title = "Gaurav's Portfolio"; 
  }, []);

  return (
    <div className="bg-back overflow-clip w-full h-screen relative">
      <Navbar />
      <Welcome />
      <DashboardImg />
    </div>
  );
}

export default Home;
