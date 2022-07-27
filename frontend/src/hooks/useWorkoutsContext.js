import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext();

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};
