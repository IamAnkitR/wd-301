import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import TaskApp from "./TaskApp";
import TaskDetailsPage from "./TaskDetailspage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskApp />} />
        <Route path="/tasks/:id" element={<TaskDetailsPage />} />
        <Route path="/users/:id" element={<TaskDetailsPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
