import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";

function DiscussionForum() {
  const [forums, setForums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulating API call to fetch forums
    setTimeout(() => {
      const mockForums = [
        {
          id: 1,
          title: "General Discussion",
          description:
            "Talk about anything related to academics or campus life.",
          totalTopics: 156,
          activeUsers: 42,
          lastActivity: "2023-12-28",
        },
        {
          id: 2,
          title: "Computer Science",
          description:
            "Discussions about programming, algorithms, and computer science concepts.",
          totalTopics: 87,
          activeUsers: 29,
          lastActivity: "2023-12-27",
        },
        {
          id: 3,
          title: "Mathematics",
          description:
            "Get help with mathematics problems and discuss mathematical concepts.",
          totalTopics: 64,
          activeUsers: 18,
          lastActivity: "2023-12-26",
        },
        {
          id: 4,
          title: "Study Groups",
          description: "Find or create study groups for your courses.",
          totalTopics: 42,
          activeUsers: 31,
          lastActivity: "2023-12-25",
        },
        {
          id: 5,
          title: "Research Opportunities",
          description:
            "Information about research positions and discussions on ongoing research.",
          totalTopics: 28,
          activeUsers: 15,
          lastActivity: "2023-12-24",
        },
      ];
      setForums(mockForums);
      setLoading(false);
    }, 1000);
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const filteredForums = forums.filter(
    (forum) =>
      forum.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      forum.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Discussion Forums</h1>

      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search forums..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center my-12">
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredForums.map((forum) => (
            <div
              key={forum.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-500 mr-2" />
                  <h2 className="text-xl font-medium">{forum.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{forum.description}</p>
                <hr className="my-4" />
                <div className="flex flex-wrap justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <ChatBubbleLeftIcon className="h-4 w-4 mr-1" />
                    <span>{forum.totalTopics} Topics</span>
                  </div>
                  <div className="flex items-center">
                    <UserGroupIcon className="h-4 w-4 mr-1" />
                    <span>{forum.activeUsers} Active Users</span>
                  </div>
                  <div>Last Activity: {formatDate(forum.lastActivity)}</div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50">
                <Link
                  to={`/discussion/${forum.id}`}
                  className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Enter Forum
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DiscussionForum;
