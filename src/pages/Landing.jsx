import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
import communitySharingImage from "../assets/discussion-pic.jpg";
import aiAssistantimage from "../assets/tyiping-picture.jpg";
import resourceHubImage from "../assets/library.png";

const Landing = () => {
  // const { currentUser } = useAuth();
  // const navigate = useNavigate();

  // Redirect authenticated users to dashboard
  // useEffect(() => {
  //   if (currentUser) {
  //     navigate("/dashboard");
  //   }
  // }, [currentUser, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <a href="#" className="font-bold text-xl">
                StudyHub
              </a>
              <div className="flex space-x-6">
                <a
                  href="/home"
                  className="px-3 py-2 hover:bg-gray-700 rounded-md"
                >
                  Home
                </a>
                <a
                  href="/resources"
                  className="px-3 py-2 hover:bg-gray-700 rounded-md"
                >
                  Resources
                </a>
                <a
                  href="/ai"
                  className="px-3 py-2 hover:bg-gray-700 rounded-md"
                >
                  AI
                </a>
              </div>
            </div>
            <div>
              <a
                href="/login"
                className="bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 py-12 text-white text-center mb-12">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">
              Your Ultimate Academic Resource Hub
            </h1>
            <p className="text-xl mb-6">
              Everything you need for academic success in one place
            </p>
            <a
              href="/login"
              className="bg-white text-indigo-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Get Started Today
            </a>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Resource Hub */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src={resourceHubImage}
                  alt="Library bookshelves"
                  className="w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Resource Hub</h3>
                <p className="text-gray-600 mb-4">
                  A vast collection of videos, books, and articles at your
                  fingertips
                </p>
                <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
                  Explore
                </button>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src={aiAssistantimage}
                  alt="Person typing on laptop"
                  className="w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AI Assistant</h3>
                <p className="text-gray-600 mb-4">
                  Study smarter with AI-powered resource suggestions
                </p>
                <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
                  Try me
                </button>
              </div>
            </div>

            {/* Community Sharing */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src={communitySharingImage}
                  alt="Students studying together"
                  className="w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Community Sharing</h3>
                <p className="text-gray-600 mb-4">
                  Connect with fellow students and share study materials
                </p>
                <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
                  Let's Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-100 py-12 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-3xl font-bold text-indigo-600">500+</h3>
                <p className="text-gray-600">Resources Added</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-3xl font-bold text-indigo-600">1000+</h3>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-3xl font-bold text-indigo-600">24/7</h3>
                <p className="text-gray-600">AI Support</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-3xl font-bold text-indigo-600">100%</h3>
                <p className="text-gray-600">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Highlight */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-blue-800 to-indigo-900 text-white p-12">
                <h3 className="text-2xl font-bold mb-4">Resource Variety</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Videos, books, and more!
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    AI Support: Your personal assistant for finding resources!
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    User-Friendly: Simple interface for easy navigation!
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 p-12">
                <h3 className="text-2xl font-bold mb-4">
                  Why Choose StudyHub?
                </h3>
                <p className="text-gray-600 mb-4">
                  StudyHub brings together all the resources you need in one
                  place, supported by AI technology to help you find exactly
                  what you're looking for.
                </p>
                <p className="text-gray-600 mb-6">
                  Join thousands of students who are already enhancing their
                  learning experience through our platform.
                </p>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded font-semibold hover:bg-indigo-700 transition">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:flex items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">
                Stay informed! Sign up for our newsletter
              </h3>
              <p className="text-gray-300">
                Get the latest resources and updates delivered to your inbox
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 w-full rounded-l text-gray-800 focus:outline-none"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r font-semibold hover:bg-indigo-700 transition">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">StudyHub</h2>
              <div className="flex space-x-4">
                <a href="#" className="bg-white p-2 rounded-full">
                  <svg
                    className="h-6 w-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="bg-white p-2 rounded-full">
                  <svg
                    className="h-6 w-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Assistance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Get in Touch
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2025 StudyHub. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-8">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Site Map
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
