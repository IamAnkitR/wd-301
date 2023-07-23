import React from "react";
// Dialogue 1: Just import the file
import SigninForm from "./SigninForm";
import { Link } from "react-router-dom";

const Signin: React.FC = () => {
  // Dialogue 2: And use it after the h1 tag
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Sign in
        </h1>
        <SigninForm />
        <h2>
          Don't have an account :{" "}
          <Link to="/signup">
            <button className="m-1 p-1 border-2  border-gray-400 rounded-lg">
              Sign Up
            </button>
          </Link>
        </h2>
      </div>
    </div>
  );
};
export default Signin;
