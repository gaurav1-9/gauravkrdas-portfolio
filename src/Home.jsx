import React, { useEffect } from "react";
import Navbar from "./PageComponents/Navbar";
import Welcome from "./PageComponents/Home/Welcome";

function Home() {
  useEffect(() => {
    document.title = "Gaurav's Portfolio"; 
  }, []);

  return (
    <div className="bg-back w-full h-screen">
      <Navbar />
      <Welcome />
    </div>
  );
}

export default Home;
