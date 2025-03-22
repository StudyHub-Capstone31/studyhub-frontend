import React, { useState } from "react";
import { useNavigate, Link, Routes, Route } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  UserIcon,
  ChevronDownIcon as ChevronDown,
} from "@heroicons/react/24/outline";

// Discussion Item Component
const DiscussionItem = ({ discussion }) => {
  const [votes, setVotes] = useState(discussion.votes);

  const handleUpvote = () => {
    setVotes((prev) => prev + 1);
  };

  const handleDownvote = () => {
    if (votes > 0) {
      setVotes((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex">
        <div className="w-16 bg-gray-100 p-2 flex flex-col items-center">
          <button
            onClick={handleUpvote}
            className="focus:outline-none hover:text-indigo-500 transition-colors"
          >
            <ChevronUpIcon className="w-5 h-5 text-gray-500" />
          </button>
          <span className="font-bold my-1">{votes}</span>
          <button
            onClick={handleDownvote}
            className="focus:outline-none hover:text-indigo-500 transition-colors"
          >
            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-4 flex-1">
          <div className="flex items-center mb-2">
            <Link
              to={`/topics/${discussion.topic
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium">
                {discussion.topic}
              </span>
            </Link>
          </div>

          <Link to={`/discussion/${discussion.id}`}>
            <h3 className="font-bold text-lg mb-2 hover:text-indigo-600 transition-colors">
              {discussion.title}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm mb-4">{discussion.content}</p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <span>
                Posted by{" "}
                <span className="font-medium text-gray-700">
                  {discussion.author}
                </span>{" "}
                · {discussion.time}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span>{discussion.replies} replies</span>
              </div>
              <div className="flex items-center">
                <span>{discussion.views} views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Topic Page Component
const TopicPage = ({ topic }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">
        {topic} Discussions
      </h2>
      <p className="text-gray-600 mb-6">
        Browse all discussions related to {topic}.
      </p>

      <Link to="/" className="text-indigo-500 hover:underline">
        &larr; Back to all discussions
      </Link>
    </div>
  );
};

// Main StudyHub Component
const StudyHub = () => {
  const [activeFilter, setActiveFilter] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  // Sample discussion data
  const discussions = [
    {
      id: 1,
      topic: "Data Structures",
      title: "Help with Data Structures!",
      content:
        "Can someone explain arrays? I'm having trouble understanding how they work and their implementation in different programming languages. Any resources would be helpful too.",
      author: "Vincent",
      time: "2 hours ago",
      replies: 7,
      views: 42,
      votes: 13,
    },
    {
      id: 2,
      topic: "Programming",
      title: "What is Computer Code?",
      content:
        "How does a computer code work? I'm a complete beginner and trying to understand the fundamentals of programming. What languages should I start with?",
      author: "Nana Yaw",
      time: "5 hours ago",
      replies: 5,
      views: 31,
      votes: 8,
    },
    {
      id: 3,
      topic: "Operation Research",
      title: "Help with Operation Research!",
      content:
        "Can someone explain transportation analysis? I'm struggling with the concepts and mathematical models. Any examples or step-by-step guides would be appreciated.",
      author: "Vincent",
      time: "2 hours ago",
      replies: 7,
      views: 28,
      votes: 5,
    },
    {
      id: 4,
      topic: "HCI",
      title: "What is Human Computer Interaction (HCI)?",
      content:
        "What is HCI about and what is it used for? I'm interested in learning more about this field and how it relates to UX/UI design. Are there any good resources to get started?",
      author: "Vincent",
      time: "2 hours ago",
      replies: 7,
      views: 36,
      votes: 10,
    },
  ];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    // In a real app, you would filter the discussions based on the selected filter
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // In a real app, you would load the appropriate discussions for the selected page
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg max-w-4xl mx-auto">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold text-gray-800">StudyHub</h1>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search discussions..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 text-sm w-64"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          <div className="relative">
            <Link to="/topics">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-full border border-gray-300 text-sm hover:bg-gray-50">
                <span>All Topics</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="relative">
            <div
              className="w-10 h-10 rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url('/api/placeholder/40/40')` }}
            ></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-500"></div>
          </div>
        </div>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-indigo-500 mb-2">
                  Discussion Forum
                </h2>
                <p className="text-gray-600">
                  Join the conversation and share your knowledge with the
                  community
                </p>
                <div className="mt-3">
                  <Link
                    to="/topics"
                    className="inline-block px-4 py-1.5 text-sm text-indigo-600 hover:text-indigo-700 hover:underline"
                  >
                    View all topics →
                  </Link>
                </div>
              </div>

              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => handleFilterChange("latest")}
                  className={`px-6 py-2 rounded-full flex items-center ${
                    activeFilter === "latest"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-700 border border-gray-300"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full mr-2 ${
                      activeFilter === "latest"
                        ? "bg-white"
                        : "border border-gray-500"
                    }`}
                  ></span>
                  Latest
                </button>
                <button
                  onClick={() => handleFilterChange("popular")}
                  className={`px-6 py-2 rounded-full flex items-center ${
                    activeFilter === "popular"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-700 border border-gray-300"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full mr-2 ${
                      activeFilter === "popular"
                        ? "bg-white"
                        : "border border-gray-500"
                    }`}
                  ></span>
                  Popular
                </button>
                <button
                  onClick={() => handleFilterChange("unanswered")}
                  className={`px-6 py-2 rounded-full flex items-center ${
                    activeFilter === "unanswered"
                      ? "bg-indigo-500 text-white"
                      : "bg-white text-gray-700 border border-gray-300"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full mr-2 ${
                      activeFilter === "unanswered"
                        ? "bg-white"
                        : "border border-gray-500"
                    }`}
                  ></span>
                  Unanswered
                </button>
              </div>

              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <DiscussionItem key={discussion.id} discussion={discussion} />
                ))}
              </div>

              <div className="flex justify-center space-x-2 mt-8">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentPage === page
                        ? "bg-indigo-500 text-white"
                        : "bg-white border border-gray-300 text-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <span className="flex items-center px-2">...</span>
                <button
                  onClick={() => handlePageChange(10)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentPage === 10
                      ? "bg-indigo-500 text-white"
                      : "bg-white border border-gray-300 text-gray-700"
                  }`}
                >
                  10
                </button>
              </div>
            </>
          }
        />

        <Route
          path="/topics/:topicName"
          element={<TopicPage topic="Data Structures" />}
        />
        <Route
          path="/discussion/:id"
          element={
            <div className="p-6 bg-white rounded-lg shadow">
              Discussion details would go here
            </div>
          }
        />
      </Routes>
    </div>
  );
};

// App Component with Router
const App = () => {
  return (
    <div className="p-4">
      <StudyHub />
    </div>
  );
};

export default App;
