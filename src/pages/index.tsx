import React from "react";

// ANIMATIONS
import { animation } from "@/animations";

const Home = () => {
  return (
    <animation.fade>
      <div className="min-h-screen grid place-items-center">
        <h1 className="text-4xl font-bold">Home Page</h1>
      </div>
    </animation.fade>

  );
};

export default Home;
