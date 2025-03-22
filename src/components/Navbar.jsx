import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          StudyHub
        </Link>
        <div className="flex items-center space-x-4">
          {currentUser ? (
            <>
              <Link to="/dashboard" className="hover:text-indigo-200">
                Dashboard
              </Link>
              <Link to="/profile" className="hover:text-indigo-200">
                Profile
              </Link>
              <button
                onClick={logout}
                className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100"
              >
                Logout
              </button>
              <div className="flex items-center">
                <img
                  src={
                    currentUser.avatarUrl ||
                    "https://mui.com/static/images/avatar/1.jpg"
                  }
                  alt="Profile"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span>
                  {currentUser.firstName || currentUser.name?.split(" ")[0]}
                </span>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-indigo-200">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
