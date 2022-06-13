import React, { useState, createContext, useEffect, useMemo } from "react";
import { pullInfo } from "./info.request";
const URL = "https://www.hassanadeola.com/outbox/info.json";

export const InfoContext = createContext();

export const InfoContextProvider = ({ children }) => {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getInfo = () => {
    setTimeout(() => {
      pullInfo().then((result) => {
        setIsLoading(false);
        if (Object.keys(result)[0] === "error") {
          let err = Object.values(result)[0];
          setError(err);
        } else {
          let data = Object.values(result)[0];
          setInfo(data);
        }
      });
    }, 2000);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <InfoContext.Provider value={{ info, isLoading, error }}>
      {children}
    </InfoContext.Provider>
  );
};
