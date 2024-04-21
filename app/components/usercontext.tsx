"use client";
import React, { useState, createContext, useContext } from "react";
import Home from "../page";
import Register from "../register/page";

interface UserContextType {
  currentUser: boolean;
  setCurrentUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextType>({
  currentUser: false,
  setCurrentUser: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
