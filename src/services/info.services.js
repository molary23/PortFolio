import React, { useState, createContext, useEffect, useRef } from "react";
import { pullInfo } from "./info.request";
const URL = "https://www.hassanadeola.com/outbox/info.json";

export const InfoContext = createContext();

export const InfoContextProvider = ({ children }) => {
  const [info, setInfo] = useState({}),
    [isLoading, setIsLoading] = useState(true),
    [error, setError] = useState(null),
    executedRef = useRef(false);

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
    if (executedRef.current) {
      return;
    }
    getInfo();
    executedRef.current = true;
  }, []);

  return (
    <InfoContext.Provider value={{ info, isLoading, error }}>
      {children}
    </InfoContext.Provider>
  );
};
