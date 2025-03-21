import React from "react";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon,
  VideoCameraIcon,
  ArrowDownTrayIcon,
  ShareIcon,
  BookmarkIcon,
  ArrowRightIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
  CloudArrowDownIcon,
} from "@heroicons/react/24/outline";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

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
        placeholder="Search lecture notes, past questions..."
        className="w-full bg-transparent outline-none text-gray-700"
      />
    </div>
  </div>
);

// Category Item Component
const CategoryItem = ({ icon: Icon, title, categoryPath }) => (
  <Link to={`/resources/category/${categoryPath}`} className="block">
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
      <div className="bg-blue-100 p-3 rounded-full mb-2">
        <Icon className="h-6 w-6 text-blue-500" />
      </div>
      <span className="text-sm text-center">{title}</span>
    </div>
  </Link>
);

// Resource Categories Component
const ResourceCategories = () => (
  <div className="mb-8">
    <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-purple-500 pb-2 inline-block">
      Resource Categories
    </h3>

    <div className="grid grid-cols-4 gap-4 mt-4">
      <CategoryItem
        icon={VideoCameraIcon}
        title="Videos/Tutorials"
        categoryPath="videos"
      />
      <CategoryItem
        icon={DocumentTextIcon}
        title="Lecture Notes"
        categoryPath="notes"
      />
      <CategoryItem
        icon={QuestionMarkCircleIcon}
        title="Past Questions"
        categoryPath="questions"
      />
      <CategoryItem icon={BookOpenIcon} title="E-Books" categoryPath="books" />
    </div>
  </div>
);

// Resource Card Component
const ResourceCard = ({
  icon: Icon,
  title,
  type,
  typeColor,
  details,
  buttons,
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
const DownloadButton = () => (
  <button className="text-xs flex items-center text-gray-600 mr-4">
    <ArrowDownTrayIcon className="h-4 w-4 mr-1" /> Download
  </button>
);

// Preview Button Component
const PreviewButton = () => (
  <button className="text-xs flex items-center text-gray-600">
    <MagnifyingGlassIcon className="h-4 w-4 mr-1" /> Preview
  </button>
);

// YouTube Button Component
const YouTubeButton = () => (
  <button className="text-xs flex items-center text-red-600 mr-4">
    <FaYoutube className="mr-1" /> Watch on YouTube
  </button>
);

// Share Button Component
const ShareButton = () => (
  <button className="text-xs flex items-center text-gray-600 mr-4">
    <ShareIcon className="h-4 w-4 mr-1" /> Share
  </button>
);

// Save Button Component
const SaveButton = () => (
  <button className="text-xs flex items-center text-gray-600">
    <BookmarkIcon className="h-4 w-4 mr-1" /> Save
  </button>
);

// Recent Resources Component
const RecentResources = () => (
  <div className="mb-8">
    <h3 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-purple-500 pb-2 inline-block">
      Recent Resources
    </h3>

    <div className="grid grid-cols-2 gap-4 mt-4">
      <ResourceCard
        icon={DocumentTextIcon}
        title="Data Structures Lecture 2 Notes"
        type="PDF"
        typeColor="blue-500"
        details="PDF - 15 Pages - Dr. Asamoah"
        buttons={
          <>
            <DownloadButton />
            <PreviewButton />
          </>
        }
      />

      <ResourceCard
        icon={VideoCameraIcon}
        title="Financial Accounting Lecture 1 Video"
        type="VIDEO"
        typeColor="red-500"
        details="Video - 2 hours - Dr. Boateng"
        buttons={
          <>
            <YouTubeButton />
            <div className="flex mt-2 w-full">
              <ShareButton />
              <SaveButton />
            </div>
          </>
        }
      />

      <ResourceCard
        icon={DocumentTextIcon}
        title="Data Structures E-Book"
        type="E-BOOK"
        typeColor="purple-500"
        details="PDF - 50 Pages - Prof. Howard"
        buttons={
          <>
            <DownloadButton />
            <PreviewButton />
          </>
        }
      />

      <ResourceCard
        icon={QuestionMarkCircleIcon}
        title="Operation Research Past Questions"
        type="TESTED"
        typeColor="yellow-500"
        details="PDF - 20 Pages - Prof. Howard"
        buttons={
          <>
            <DownloadButton />
            <PreviewButton />
          </>
        }
      />
    </div>
  </div>
);

// Stat Item Component
const StatItem = ({ icon: Icon, count, label }) => (
  <div className="flex flex-col items-center">
    <Icon className="h-12 w-12 mb-2" />
    <h3 className="text-3xl font-bold mb-1">{count}</h3>
    <p className="text-indigo-200">{label}</p>
  </div>
);

// Stats Section Component
const StatsSection = () => (
  <div className="bg-indigo-600 rounded-lg p-6 text-white mb-8">
    <div className="grid grid-cols-3 gap-4 text-center">
      <StatItem icon={UserGroupIcon} count="5,000" label="Active Students" />
      <StatItem icon={DocumentDuplicateIcon} count="1,200" label="Resources" />
      <StatItem icon={CloudArrowDownIcon} count="25,000" label="Downloads" />
    </div>
  </div>
);

// Newsletter Section Component
const NewsletterSection = () => (
  <div className="bg-indigo-600 py-8 text-center">
    <div className="max-w-3xl mx-auto px-6">
      <h3 className="text-white text-xl font-bold mb-4">
        Stay informed! Sign up for our newsletter and receive exclusive updates!
      </h3>

      <div className="flex max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email..."
          className="flex-1 p-3 rounded-l-lg outline-none"
        />
        <button className="bg-pink-500 text-white px-4 py-3 rounded-r-lg flex items-center">
          Sign up <ArrowRightIcon className="h-4 w-4 ml-2" />
        </button>
      </div>
    </div>
  </div>
);

// Footer Link Component
const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="hover:text-white">
      {children}
    </a>
  </li>
);

// Footer Section Component
const FooterSection = ({ title, children }) => (
  <div>
    <h4 className="text-white font-bold mb-4 border-b-2 border-indigo-500 pb-2 inline-block">
      {title}
    </h4>
    {children}
  </div>
);

// Social Icons Component
const SocialIcons = () => (
  <div className="flex gap-4 mt-4">
    <a href="#" className="text-indigo-200 hover:text-white">
      <FaFacebook />
    </a>
    <a href="#" className="text-indigo-200 hover:text-white">
      <FaInstagram />
    </a>
    <a href="#" className="text-indigo-200 hover:text-white">
      <FaTwitter />
    </a>
    <a href="#" className="text-indigo-200 hover:text-white">
      <FaYoutube />
    </a>
  </div>
);

// Footer Component
const Footer = () => (
  <footer className="bg-indigo-600 py-10 text-indigo-200">
    <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-8">
      <FooterSection title="StudyHub">
        <SocialIcons />
        <div className="mt-6">
          <h5 className="text-white mb-2">Support</h5>
          <ul className="space-y-2">
            <FooterLink href="#">Help Center</FooterLink>
            <FooterLink href="#">Assistance</FooterLink>
            <FooterLink href="#">Tutorials</FooterLink>
            <FooterLink href="#">Get in Touch</FooterLink>
          </ul>
        </div>
      </FooterSection>

      <FooterSection title="Resources">
        <ul className="space-y-2">
          <FooterLink href="#">Videos & Tutorials</FooterLink>
          <FooterLink href="#">Lecture Notes</FooterLink>
          <FooterLink href="#">Past Questions</FooterLink>
          <FooterLink href="#">E-Books</FooterLink>
          <FooterLink href="#">Study Groups</FooterLink>
        </ul>
      </FooterSection>

      <FooterSection title="Legal">
        <ul className="space-y-2">
          <FooterLink href="#">Privacy Guidelines</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
          <FooterLink href="#">Copyright Policy</FooterLink>
          <FooterLink href="#">Site Map</FooterLink>
          <FooterLink href="#">Accessibility</FooterLink>
        </ul>
      </FooterSection>
    </div>

    <div className="border-t border-indigo-500 max-w-5xl mx-auto mt-8 pt-6 flex justify-between px-6 text-sm">
      <div>© 2025 StudyHub. All rights reserved.</div>
      <div className="flex gap-4">
        <a href="#" className="hover:text-white">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-white">
          Terms of Use
        </a>
        <a href="#" className="hover:text-white">
          Cookie Policy
        </a>
      </div>
    </div>
  </footer>
);

// Main StudyHub Component
function Resource() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content container */}
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
        <Header />

        {/* Welcome section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Welcome to <span className="text-purple-600">StudyHub</span>
          </h2>
          <p className="text-gray-500">
            Your one-stop platform for academic excellence
          </p>
        </div>

        <SearchBar />
        <ResourceCategories />
        <RecentResources />
        <StatsSection />
      </div>

      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default Resource;
