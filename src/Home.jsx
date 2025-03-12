import React, { useEffect } from "react";
import Navbar from "./PageComponents/Navbar";

function Home() {
  useEffect(() => {
    document.title = "Gaurav's Portfolio"; 
  }, []);

  return (
    <div className="bg-back w-full h-screen">
      <Navbar />
    </div>
  );
}

export default Home;
