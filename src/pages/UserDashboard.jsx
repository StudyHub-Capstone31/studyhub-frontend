import React, { useState, useEffect } from "react";
import {
  BellIcon,
  DocumentTextIcon,
  ArrowUpTrayIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import GeneralNavbar from "../components/GeneralNavbar";

const UserDashboard = () => {
  const [fileHover, setFileHover] = useState(false);
  const [stats, setStats] = useState({ downloads: 0, uploads: 0 });
  const [activities, setActivities] = useState([]);
  const { currentUser } = useAuth();

  // Get first letter of user's first name for avatar
  const getInitial = () => {
    if (currentUser) {
      if (currentUser.firstName) {
        return currentUser.firstName.charAt(0);
      } else if (currentUser.name) {
        return currentUser.name.charAt(0);
      }
    }
    return "U"; // Default if no name is available
  };

  // Get user's full name or first name
  const getUserName = () => {
    if (currentUser) {
      if (currentUser.firstName) {
        return currentUser.firstName;
      } else if (currentUser.name) {
        return currentUser.name.split(" ")[0]; // Get first name from full name
      }
    }
    return "User"; // Default if no name is available
  };

  // Get user's department
  const getUserDepartment = () => {
    if (currentUser && currentUser.department) {
      return currentUser.department;
    }
    return ""; // Return empty string if no department
  };

  // Load user stats and activities (could be from API in a real app)
  useEffect(() => {
    // This would be an API call in a production app
    // For now, we're using mock data
    setStats({ downloads: 0, uploads: 0 });
    setActivities([
      {
        type: "download",
        description: "You downloaded Data Structures Lecture Notes 2",
        time: new Date(Date.now() - 60000 * 30), // 30 minutes ago
      },
      {
        type: "forum",
        user: "Adolph O.",
        description: "replied to your forum post",
        time: new Date(Date.now() - 60000 * 120), // 2 hours ago
      },
    ]);
  }, [currentUser]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Replace the header with GeneralNavbar */}
      <GeneralNavbar />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Info */}
        <div className="flex items-center mb-12">
          <div className="relative mr-4">
            <div className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center">
              <span className="text-white font-bold">{getInitial()}</span>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Hi, {getUserName()}!</h2>
            <p className="text-gray-500">{getUserDepartment()}</p>
          </div>
        </div>

        {/* Stats Section */}
        <h3 className="text-lg font-medium text-gray-800 mb-4">Your Stats</h3>
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <p className="text-2xl font-bold text-white mb-1">
              {stats.downloads}
            </p>
            <p className="text-sm text-gray-300">Downloads</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <p className="text-2xl font-bold text-white mb-1">
              {stats.uploads}
            </p>
            <p className="text-sm text-gray-300">Uploads</p>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Activity Feed
          </h3>
          <div className="space-y-2 mb-6">
            {activities.length > 0 ? (
              activities.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <DocumentTextIcon className="h-5 w-5 text-gray-500 mt-0.5 mr-2" />
                  <p className="text-sm">
                    {activity.type === "download" ? (
                      <>
                        You downloaded{" "}
                        <span className="text-blue-600">
                          {activity.description.replace("You downloaded ", "")}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-orange-500">{activity.user}</span>{" "}
                        {activity.description}
                      </>
                    )}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No recent activity</p>
            )}
          </div>
        </div>

        {/* Upload Area */}
        <div
          className={`
            bg-gray-200 rounded-lg p-12 flex flex-col items-center justify-center
            border-2 border-dashed ${
              fileHover ? "border-blue-500" : "border-gray-400"
            }
            transition-colors duration-200
          `}
          onDragEnter={() => setFileHover(true)}
          onDragLeave={() => setFileHover(false)}
          onDragOver={(e) => {
            e.preventDefault();
            setFileHover(true);
          }}
          onDrop={() => setFileHover(false)}
        >
          <ArrowUpTrayIcon className="h-10 w-10 text-gray-400 mb-2" />
          <p className="text-gray-600 text-sm flex items-center">
            Drag files here or click to upload
            <InformationCircleIcon className="h-4 w-4 ml-1 text-blue-500" />
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Browse Files
          </button>
        </div>

        {/* Quick Links Section */}
        <div className="mt-10">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Quick Links
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/resources"
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h4 className="text-md font-semibold text-gray-800 mb-1">
                Resources
              </h4>
              <p className="text-sm text-gray-500">
                Access study materials and resources
              </p>
            </Link>
            <Link
              to="/discussion-forum"
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h4 className="text-md font-semibold text-gray-800 mb-1">
                Discussion Forum
              </h4>
              <p className="text-sm text-gray-500">Engage with the community</p>
            </Link>
            <Link
              to="/ai"
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h4 className="text-md font-semibold text-gray-800 mb-1">
                AI Assistant
              </h4>
              <p className="text-sm text-gray-500">
                Get help with your studies
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
