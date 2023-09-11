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
  userName: "",
  accountType: "", //organization or individual,
  accountChainInfo: {}, //will be populated on profile login or creation
  logInUser: function (
    token: string,
    id: string,
    name: string,
    type: string,
    chainInfo: Object,
  ) {
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
  const [accountType, setAccountType] = useState("");
  const [userName, serUserName] = useState("");
  const [accountChainInfo, setAccountChainInfo] = useState({});

  const logInUser = (
    token: string,
    id: string,
    name: string,
    type: string,
    chainInfo: Object,
  ) => {
    if (userToken === "" && userID === "") {
      setUserToken(token);
      setUserID(id);
      serUserName(name);
      setAccountType(type);
      setAccountChainInfo(chainInfo);
      console.log("User added to ctx");
    } else {
      console.log("Failed to add user");
    }
  };

  const logOutUser = () => {
    console.log("Log out user");
    setUserToken("");
    setUserID("");
    serUserName("");
    setAccountType("");
    setAccountChainInfo({});
  };

  const context = {
    userToken,
    userID,
    userName,
    accountType,
    accountChainInfo,
    logInUser,
    logOutUser,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
