import React from "react";
import { HeroScreen } from "../hero/HeroScreen";

export const MainScreen = () => {
  return (
    <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
      <main>
        <HeroScreen />
      </main>
    </div>
  );
};
