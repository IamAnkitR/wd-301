import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import TaskApp from "./TaskApp";
import TaskDetailsPage from "./TaskDetailspage";
import Signin from "./Signin";
import { ProtectedRoute } from "./ProtectedRoute";
import Notfound from "./Notfound";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/signin" && location.pathname !== "/notfound" && (
        <Header />
      )}
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />

        <Route
          path="/tasks"
          element={<ProtectedRoute element={<TaskApp />} />}
        />
        <Route
          path="/tasks/:id"
          element={<ProtectedRoute element={<TaskDetailsPage />} />}
        />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/notfound"
          element={<ProtectedRoute element={<Notfound />} />}
        />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
