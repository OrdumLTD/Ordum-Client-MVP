import { useState, createContext, ReactNode, useContext } from "react";
// import { createContext } from "react";

type Props = {
  children: ReactNode;
};

const UserContext = createContext({
  //   userAddress: "",
  //   userName: "",
  userToken: "",
  userID: "",
  //   logInUser: function (token: string, address: string, name: string) {},
  logInUser: function (token: string, id: string) {},
  logOutUser: function () {},
});

export const UserContextProvider = ({ children }: Props) => {
  //   const [userAddress, setUserAddress] = useState("");
  //   const [userName, setUserName] = useState("");
  const [userID, setUserID] = useState("");
  const [userToken, setUserToken] = useState("");

  //   const logInUser = (token: string, address: string, name: string) => {
  const logInUser = (token: string, id: string) => {
    setUserToken(token);
    setUserID(id)
    // setUserName(name);
    // setUserAddress(address);
  };

  const logOutUser = () => {
    setUserToken("");
    setUserID("")
    // setUserName("");
    // setUserAddress("");
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
