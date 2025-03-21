import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import UploadsDownloads from "./pages/UploadsDownloads";
import Resource from "./pages/Resource";
import ResourceCategory from "./pages/ResourceCategory";
import UserDashboard from "./pages/UserDashboard";
import DiscussionForum from "./pages/DiscussionForum";
import Discussions from "./pages/Discussions";
import Announcements from "./pages/Announcements";
import LoadingPage from "./pages/LoadingPage";
import Discussion from "./pages/Discussion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/resources" element={<Resource />} />
        <Route
          path="/resources/category/:categoryId"
          element={<ResourceCategory />}
        />
        <Route path="/uploadsdownloads" element={<UploadsDownloads />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/forum" element={<DiscussionForum />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/ai" element={<Chatbot />} />
        <Route path="/discussion-forum" element={<DiscussionForum />} />
        <Route path="/discussion/:forumId" element={<Discussion />} />
      </Routes>
    </Router>
  );
}

export default App;
