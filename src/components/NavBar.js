import React, { useContext } from "react";
import context from "../context/Context";

const NavBar = () => {
  const Theme = useContext(context);
  return <div className={Theme ? "dark" : "light"}>NavBar</div>;
};

export default NavBar;
