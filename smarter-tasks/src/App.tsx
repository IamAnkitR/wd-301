import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./App.css";
import { ThemeContext } from "./context/theme";
const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`h-screen py-3 ${theme === "dark" ? "dark" : ""}`}>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
