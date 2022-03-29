import logo from "./logo.svg";
import "./App.css";
import Bats from "./components/Bats";
import { Provider } from "react-redux";
import store from "./redux/store";
import Ball from "./components/Ball";
import context from "./context/Context";
import NavBar from "./components/NavBar";
import Parent1 from "./components/Parent1";
import Parent2 from "./components/Parent2";
import { useState } from "react";
import User from "./components/User";
function App() {
  // const [theme, setTheme] = useState(false);
  return (
    // <context.Provider value={theme}>
    // <button onClick={() => setTheme(!theme)}>Change theme </button>
    <Provider store={store}>
      <Bats />
      <Ball />
      <User />
    </Provider>
    //<NavBar />
    //<Parent1 />
    // <Parent2 />
    // </context.Provider>
  );
}

export default App;
