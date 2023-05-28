import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link to="/" className="ml-6 text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/tasks" className="ml-6 text-gray-300 hover:text-white">
              Tasks
            </Link>
          </div>
          <div className="flex items-center">
            <h2 className="text-white text-lg font-bold">Task Manager</h2>
          </div>
          <div className="flex items-center"></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
