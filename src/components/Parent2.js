import React, { useContext } from "react";
import context from "../context/Context";
const Parent2 = () => {
  const theme = useContext(context);
  return <div className={theme ? "dark" : "light"}>Parent2</div>;
};

export default Parent2;
