import React from "react";
import {
  MagnifyingGlassIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  ArrowUpTrayIcon,
  MegaphoneIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
import GeneralNavbar from "../components/GeneralNavbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background network effect */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full opacity-10" viewBox="0 0 800 600">
          <g stroke="#4F46E5" strokeWidth="0.5" fill="none">
            {/* Generate random dots and lines for network effect */}
            {Array.from({ length: 20 }).map((_, i) => (
              <React.Fragment key={i}>
                <circle
                  cx={Math.random() * 800}
                  cy={Math.random() * 600}
                  r="2"
                  fill={Math.random() > 0.5 ? "#4F46E5" : "#E53E3E"}
                />
                <line
                  x1={Math.random() * 800}
                  y1={Math.random() * 600}
                  x2={Math.random() * 800}
                  y2={Math.random() * 600}
                />
              </React.Fragment>
            ))}
          </g>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-screen mx-auto">
        <GeneralNavbar />

        {/* Search bar */}
        <div className="mt-12 mb-14">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search lecture notes, past questions..."
            />
          </div>
        </div>

        {/* Welcome text */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to <span className="text-blue-600">StudyHub</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Your one-stop platform for academic resources and collaboration
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <a
            href="/resources"
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:shadow-md transition duration-300"
          >
            <DocumentTextIcon className="h-10 w-10 text-blue-600 mb-3" />
            <span className="text-gray-800 text-sm font-medium">
              Browse Resources
            </span>
          </a>

          <a
            href="/discussion-forum"
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:shadow-md transition duration-300"
          >
            <ChatBubbleLeftRightIcon className="h-10 w-10 text-blue-600 mb-3" />
            <span className="text-gray-800 text-sm font-medium">
              Join Discussions
            </span>
          </a>

          <a
            href="/uploadsdownloads"
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:shadow-md transition duration-300"
          >
            <ArrowUpTrayIcon className="h-10 w-10 text-blue-600 mb-3" />
            <span className="text-gray-800 text-sm font-medium">
              Upload Files
            </span>
          </a>

          <a
            href="/announcements"
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:shadow-md transition duration-300"
          >
            <MegaphoneIcon className="h-10 w-10 text-blue-600 mb-3" />
            <span className="text-gray-800 text-sm font-medium">
              Latest Announcement
            </span>
          </a>
        </div>

        {/* Stats */}
        <div className="flex justify-center space-x-12 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">5000</div>
            <div className="text-sm text-gray-500">Students</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">200</div>
            <div className="text-sm text-gray-500">Resources</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">50</div>
            <div className="text-sm text-gray-500">Courses</div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-xs">
          <p>© 2025 StudyHub • Privacy Policy • Terms of Service</p>
        </footer>
      </div>

      {/* Chat button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg">
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Home;
