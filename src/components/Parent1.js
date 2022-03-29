import React, { useContext } from "react";
import Child from "./Child";
import context from "../context/Context";
const Parent1 = () => {
  const theme = useContext(context);
  return (
    <div className={theme ? "dark" : "light"}>
      Parent1
      <div>
        <Child />
      </div>
    </div>
  );
};

export default Parent1;
