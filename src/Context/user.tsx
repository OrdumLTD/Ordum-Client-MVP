"use client";

import { useState, createContext, ReactNode, useContext } from "react";
// import { createContext } from "react";

type Props = {
  children: ReactNode;
};

export interface user {
  userID: string;
  userToken: string;
}

const defaultState = {
  userToken: "",
  userID: "",
  logInUser: function (token: string, id: string) {
    return;
  },
  logOutUser: function () {
    return;
  },
};

const UserContext = createContext(defaultState);

export const UserContextProvider = ({ children }: Props) => {
  const [userID, setUserID] = useState<user["userID"]>("");
  const [userToken, setUserToken] = useState<user["userToken"]>("");

  const logInUser = (token: string, id: string) => {
    if (userToken === "" && userID === "") {
      setUserToken(token);
      setUserID(id);
      console.log("User added to ctx");
    } else {
      console.log("Failed to add user");
    }
  };

  const logOutUser = () => {
    console.log("Log out user");
    setUserToken("");
    setUserID("");
  };

  const context = {
    // userAddress,
    // userName,
    userToken,
    userID,
    logInUser,
    logOutUser,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
