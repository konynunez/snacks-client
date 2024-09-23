"use client";
import { createContext, useState, useEffect, useContext } from "react";
import snackAPI from "../utils/axiosinstance";

// Create the context
const snackContext = createContext();

// Provide the context
export const SnackProvider = ({ children }) => {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    snackAPI.get("/snacks").then((response) => {
      console.log(response.data);
      setSnacks(response.data);
    });

    // Cleanup function
    return () => {
      console.log("Cleanup");
    };
  }, []);

  return (
    <snackContext.Provider value={{ snacks }}>{children}</snackContext.Provider>
  );
};

// Export custom hook to use our context
export const useSnacks = () => useContext(snackContext);
