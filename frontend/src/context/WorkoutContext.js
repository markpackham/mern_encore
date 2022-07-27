import { createContext } from "react";

import React from "react";

export const WorkoutContext = createContext();

export const WorkoutsContextProvider = () => {
  return <WorkoutContext.Provider></WorkoutContext.Provider>;
};
