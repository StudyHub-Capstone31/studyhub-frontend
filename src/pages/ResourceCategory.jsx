import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon,
  VideoCameraIcon,
  ArrowDownTrayIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import GeneralNavbar from "../components/GeneralNavbar";

// Header Component
const Header = () => (
  <header className="flex justify-between items-center mb-8">
    <h1 className="text-2xl font-bold text-gray-800">StudyHub</h1>
    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
      <img
        src="/api/placeholder/40/40"
        alt="User profile"
        className="w-full h-full object-cover"
      />
    </div>
  </header>
);

// Search Bar Component
const SearchBar = () => (
  <div className="relative mb-8">
    <div className="flex items-center border rounded-lg p-3 bg-gray-50">
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search in this category..."
        className="w-full bg-transparent outline-none text-gray-700"
      />
    </div>
  </div>
);

// Resource Card Component
const ResourceCard = ({
  icon: Icon, // Fix: Uncomment and ensure this parameter is correctly set
  title,
  type,
  typeColor,
  details,
  buttons,
  fileUrl,
}) => (
  <div className="border rounded-lg p-4 flex items-start">
    <div
      className={`bg-blue-500 rounded-lg p-3 mr-4 flex items-center justify-center`}
    >
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div className="flex-1">
      <div className="flex justify-between">
        <h4 className="font-bold text-gray-800">{title}</h4>
        <span
          className={`bg-${typeColor} text-white text-xs px-2 py-1 rounded`}
        >
          {type}
        </span>
      </div>
      <p className="text-sm text-gray-500 my-1">{details}</p>
      <div className="flex mt-2">{buttons}</div>
    </div>
  </div>
);

// Download Button Component
const DownloadButton = ({ onClick }) => (
  <button
    className="text-xs flex items-center text-gray-600 mr-4 hover:text-blue-600 transition-colors"
    onClick={onClick}
  >
    <ArrowDownTrayIcon className="h-4 w-4 mr-1" /> Download
  </button>
);

// Preview Button Component
const PreviewButton = ({ onClick }) => (
  <button
    className="text-xs flex items-center text-gray-600 hover:text-blue-600 transition-colors"
    onClick={onClick}
  >
    <MagnifyingGlassIcon className="h-4 w-4 mr-1" /> Preview
  </button>
);

const ResourceCategory = () => {
  const { categoryId } = useParams();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryInfo, setCategoryInfo] = useState({ title: "", icon: null });

  // Handler for preview action
  const handlePreview = (resource) => {
    // Open the file in a new tab for preview
    if (resource.fileUrl) {
      window.open(resource.fileUrl, "_blank");
    }
  };

  // Handler for download action
  const handleDownload = (resource) => {
    // Create an anchor element and trigger download
    if (resource.fileUrl) {
      const link = document.createElement("a");
      link.href = resource.fileUrl;
      link.download = resource.title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  useEffect(() => {
    // This would normally be an API call
    // For demo purposes, we'll just simulate different resources for each category
    setLoading(true);

    // Determine category information based on categoryId
    let icon, title;
    switch (categoryId) {
      case "videos":
        icon = VideoCameraIcon;
        title = "Videos/Tutorials";
        break;
      case "notes":
        icon = DocumentTextIcon;
        title = "Lecture Notes";
        break;
      case "questions":
        icon = QuestionMarkCircleIcon;
        title = "Past Questions";
        break;
      case "books":
        icon = BookOpenIcon;
        title = "E-Books";
        break;
      default:
        icon = DocumentTextIcon;
        title = "Resources";
    }

    setCategoryInfo({ title, icon });

    // Simulate fetching resources
    setTimeout(() => {
      // Generate mock resources based on category
      const mockResources = Array(8)
        .fill()
        .map((_, idx) => ({
          id: idx,
          icon: icon, // This correctly passes the icon to each resource
          title: `${title} ${idx + 1}`,
          type:
            categoryId === "videos"
              ? "VIDEO"
              : categoryId === "notes"
              ? "PDF"
              : categoryId === "questions"
              ? "TESTED"
              : "E-BOOK",
          typeColor:
            categoryId === "videos"
              ? "red-500"
              : categoryId === "notes"
              ? "blue-500"
              : categoryId === "questions"
              ? "yellow-500"
              : "purple-500",
          details: `${
            categoryId === "videos"
              ? "Video - 1 hour"
              : categoryId === "notes"
              ? "PDF - 20 Pages"
              : categoryId === "questions"
              ? "PDF - 15 Pages"
              : "PDF - 100 Pages"
          } - Prof. Johnson`,
          // Add mock file URLs based on category and index
          fileUrl:
            categoryId === "videos"
              ? `https://example.com/${categoryId}/video${idx + 1}.mp4`
              : `https://example.com/${categoryId}/resource${idx + 1}.pdf`,
        }));

      setResources(mockResources);
      setLoading(false);
    }, 500);
  }, [categoryId]);

  return (
    <div className="min-h-screen bg-gray-50">
      <GeneralNavbar />

      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8 mt-6">
        {/* Remove the original header since we're using GeneralNavbar */}

        <div className="mb-6">
          <Link
            to="/resources"
            className="flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <ChevronLeftIcon className="h-5 w-5 mr-1" />
            Back to all resources
          </Link>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {categoryInfo.title} Resources
          </h2>
          <p className="text-gray-500">
            Browse all available {categoryInfo.title.toLowerCase()} in our
            library
          </p>
        </div>

        <SearchBar />

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.id}
                icon={resource.icon}
                title={resource.title}
                type={resource.type}
                typeColor={resource.typeColor}
                details={resource.details}
                fileUrl={resource.fileUrl}
                buttons={
                  <>
                    <DownloadButton onClick={() => handleDownload(resource)} />
                    <PreviewButton onClick={() => handlePreview(resource)} />
                  </>
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceCategory;
