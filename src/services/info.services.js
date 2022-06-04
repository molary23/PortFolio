import React, { useState, createContext, useEffect, useMemo } from "react";
const URL = "https://www.hassanadeola.com/outbox/info.json";

export const InfoContext = createContext();

export const InfoContextProvider = ({ children }) => {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getInfo = async () => {
    setIsLoading(true);
    try {
      setIsLoading(false);
      const response = await fetch("info.json"),
        data = await response.json();
      setInfo(data);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
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
