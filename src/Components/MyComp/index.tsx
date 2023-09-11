import * as React from "react";
import LogIn from "@/Components/Login";

export const MyComp = () => {
  React.useEffect(() => {
    // window is accessible here.
    console.log("window.innerHeight", window.innerHeight);
  }, []);

  return <LogIn />;
};
