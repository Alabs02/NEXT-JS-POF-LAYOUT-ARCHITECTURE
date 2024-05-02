import React from "react";

// ANIMATIONS
import { animation } from "@/animations";

const Messages = () => {
  return (
    <animation.slide>
      <div className="min-h-screen grid place-items-center">
        <h1 className="text-4xl font-bold">Messages Page</h1>
      </div>
    </animation.slide>
  );
};

export default Messages;
