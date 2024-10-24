import React, { useContext, createContext, useState } from "react";

export const userContext = createContext();

export const useUser = () => useContext(userContext);

export const UserProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <userContext.Provider value={{ isOpen, setIsOpen, toggleMenu }}>
      {children}
    </userContext.Provider>
  );
};
