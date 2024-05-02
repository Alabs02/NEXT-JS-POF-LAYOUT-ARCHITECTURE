import React from "react";

// ANIMATIONS
import { animation } from "@/animations";

const Notifications = () => {
  return (
    <animation.slide type="horizontal">
      <div className="min-h-screen grid place-items-center">
        <h1 className="text-4xl font-bold">Notifications Page</h1>
      </div>
    </animation.slide>
  );
};

export default Notifications;
