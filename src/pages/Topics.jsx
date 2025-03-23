import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import GeneralNavbar from "../components/GeneralNavbar";

function Topics() {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    // Simulate fetching topics from an API
    setTimeout(() => {
      const mockTopics = [
        {
          id: 1,
          name: "Data Structures",
          count: 42,
          recent: true,
          popular: true,
        },
        { id: 2, name: "Algorithms", count: 38, recent: true, popular: true },
        { id: 3, name: "Programming", count: 65, recent: true, popular: true },
        {
          id: 4,
          name: "Web Development",
          count: 53,
          recent: true,
          popular: true,
        },
        {
          id: 5,
          name: "Machine Learning",
          count: 47,
          recent: true,
          popular: true,
        },
        {
          id: 6,
          name: "Artificial Intelligence",
          count: 31,
          recent: false,
          popular: true,
        },
        {
          id: 7,
          name: "Database Systems",
          count: 29,
          recent: true,
          popular: false,
        },
        {
          id: 8,
          name: "Operating Systems",
          count: 25,
          recent: false,
          popular: false,
        },
        {
          id: 9,
          name: "Computer Networks",
          count: 22,
          recent: false,
          popular: false,
        },
        { id: 10, name: "HCI", count: 18, recent: true, popular: false },
        {
          id: 11,
          name: "Information Security",
          count: 16,
          recent: false,
          popular: false,
        },
        {
          id: 12,
          name: "Software Engineering",
          count: 35,
          recent: false,
          popular: true,
        },
        {
          id: 13,
          name: "Computer Architecture",
          count: 14,
          recent: false,
          popular: false,
        },
        {
          id: 14,
          name: "Computer Graphics",
          count: 12,
          recent: false,
          popular: false,
        },
        {
          id: 15,
          name: "Operation Research",
          count: 10,
          recent: true,
          popular: false,
        },
        {
          id: 16,
          name: "Cloud Computing",
          count: 20,
          recent: false,
          popular: false,
        },
        {
          id: 17,
          name: "Mobile Development",
          count: 27,
          recent: true,
          popular: false,
        },
        {
          id: 18,
          name: "Game Development",
          count: 15,
          recent: false,
          popular: false,
        },
        {
          id: 19,
          name: "Cybersecurity",
          count: 19,
          recent: false,
          popular: false,
        },
        {
          id: 20,
          name: "Theoretical Computer Science",
          count: 8,
          recent: false,
          popular: false,
        },
      ];
      setTopics(mockTopics);
      setLoading(false);
    }, 800);
  }, []);

  const filteredTopics = topics.filter((topic) => {
    // Apply search filter
    const matchesSearch = topic.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // Apply category filter
    if (activeFilter === "all") return matchesSearch;
    if (activeFilter === "recent") return matchesSearch && topic.recent;
    if (activeFilter === "popular") return matchesSearch && topic.popular;

    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <GeneralNavbar />

      <div className="max-w-4xl mx-auto py-8 px-4">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-xl font-bold text-gray-800">StudyHub</h1>
            </Link>
          </div>

          <button
            onClick={() => navigate("/discussion-forum")}
            className="flex items-center text-sm px-3 py-1.5 text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5 mr-1.5" />
            Back to Forum
          </button>
        </header>

        <div className="text-center mb-6">
          <h2 className="text-lg font-bold text-indigo-500 mb-1">
            Discussion Topics
          </h2>
          <p className="text-gray-600 text-sm">
            Browse all available discussion topics
          </p>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="relative max-w-xs w-full">
            <input
              type="text"
              placeholder="Search topics..."
              className="pl-9 pr-4 py-2 rounded-full border border-gray-300 text-sm w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                activeFilter === "all"
                  ? "bg-indigo-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              All Topics
            </button>
            <button
              onClick={() => setActiveFilter("recent")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                activeFilter === "recent"
                  ? "bg-indigo-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              Recent
            </button>
            <button
              onClick={() => setActiveFilter("popular")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                activeFilter === "popular"
                  ? "bg-indigo-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              Popular
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin h-8 w-8 border-3 border-indigo-500 rounded-full border-t-transparent"></div>
          </div>
        ) : (
          <>
            {filteredTopics.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No topics found matching your search criteria.
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {filteredTopics.map((topic) => (
                  <Link
                    key={topic.id}
                    to={`/topics/${topic.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg p-3 border border-gray-200 hover:border-indigo-300 hover:shadow-sm transition-all h-full flex flex-col">
                      <h3 className="font-medium text-sm text-gray-800 group-hover:text-indigo-600 mb-1.5 line-clamp-2">
                        {topic.name}
                      </h3>
                      <div className="mt-auto">
                        <span className="text-xs text-gray-500">
                          {topic.count} discussions
                        </span>
                      </div>
                      {(topic.recent || topic.popular) && (
                        <div className="flex mt-1.5 space-x-1.5">
                          {topic.recent && (
                            <span className="bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded text-xxs">
                              Recent
                            </span>
                          )}
                          {topic.popular && (
                            <span className="bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded text-xxs">
                              Popular
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Topics;
