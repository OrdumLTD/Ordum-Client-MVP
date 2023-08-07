import { useState, createContext, ReactNode, useContext } from "react";
// import { createContext } from "react";

type Props = {
  children: ReactNode;
};

const UserContext = createContext({
//   userAddress: "",
//   userName: "",
  userToken: "",
//   logInUser: function (token: string, address: string, name: string) {},
  logInUser: function (token: string) {},
  logOutUser: function () {},
});

export const UserContextProvider = ({ children }: Props) => {
//   const [userAddress, setUserAddress] = useState("");
//   const [userName, setUserName] = useState("");
  const [userToken, setUserToken] = useState("");

//   const logInUser = (token: string, address: string, name: string) => {
 const logInUser = (token: string) => {
    setUserToken(token);
    // setUserName(name);
    // setUserAddress(address);
  };

  const logOutUser = () => {
    setUserToken("");
    // setUserName("");
    // setUserAddress("");
  };

  const context = {
    // userAddress,
    // userName,
    userToken,
    logInUser,
    logOutUser,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
