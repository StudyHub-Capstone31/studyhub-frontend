import React, { useState, useEffect } from "react";
import {
  PencilIcon,
  CheckIcon,
  XMarkIcon,
  CameraIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../context/AuthContext";
import GeneralNavbar from "../components/GeneralNavbar";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [previewAvatar, setPreviewAvatar] = useState(null);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const { currentUser, updateUserData } = useAuth();

  // Form fields
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    department: "",
  });

  useEffect(() => {
    if (currentUser) {
      // Use actual user data from auth context
      setUser(currentUser);
      setFormValues({
        firstName:
          currentUser.firstName || currentUser.name?.split(" ")[0] || "",
        lastName: currentUser.lastName || currentUser.name?.split(" ")[1] || "",
        email: currentUser.email || "",
        phoneNumber: currentUser.phoneNumber || "",
        department: currentUser.department || "",
      });
      setPreviewAvatar(
        currentUser.avatarUrl ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMbOYe3h021cAgW5JdHofpDGpux7Nxn0VWA&s"
      );
      setLoading(false);
    } else {
      // Fallback to mock data if no user is logged in
      setTimeout(() => {
        const mockUserData = {
          id: 123,
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          role: "student",
          department: "Computer Science",
          avatarUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMbOYe3h021cAgW5JdHofpDGpux7Nxn0VWA&s",
          joined: "2025-03-25",
        };

        setUser(mockUserData);
        setFormValues({
          firstName: mockUserData.firstName,
          lastName: mockUserData.lastName,
          email: mockUserData.email,
          role: mockUserData.role,
          department: mockUserData.department,
        });
        setPreviewAvatar(mockUserData.avatarUrl);
        setLoading(false);
      }, 1000);
    }
  }, [currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatar(file);
      setPreviewAvatar(URL.createObjectURL(file));
    }
  };

  const handleEditToggle = () => {
    if (editMode) {
      // Reset form values if canceling
      setFormValues({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        department: user.department,
      });
      setPreviewAvatar(user.avatarUrl);
      setAvatar(null);
    }
    setEditMode(!editMode);
  };

  const handleSaveProfile = () => {
    // Simulate API call to save profile changes
    setLoading(true);
    setTimeout(() => {
      const updatedUser = {
        ...user,
        ...formValues,
        avatarUrl: previewAvatar,
      };
      setUser(updatedUser);

      // Update the user data in context and cookies
      updateUserData(updatedUser);

      setEditMode(false);
      setLoading(false);
      setNotification({
        show: true,
        message: "Profile updated successfully!",
        type: "success",
      });

      // Hide notification after 5 seconds
      setTimeout(() => {
        setNotification({ ...notification, show: false });
      }, 5000);
    }, 1000);
  };

  if (loading && !user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <GeneralNavbar />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Profile Photo Section */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src={previewAvatar}
                    alt={`${formValues.firstName} ${formValues.lastName}`}
                    className="h-36 w-36 rounded-full object-cover"
                  />
                  {editMode && (
                    <div className="absolute bottom-0 right-0">
                      <label htmlFor="avatar-upload" className="cursor-pointer">
                        <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <CameraIcon className="h-6 w-6 text-white" />
                        </div>
                        <input
                          id="avatar-upload"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleAvatarChange}
                        />
                      </label>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Member since 2025
                </p>
              </div>

              {/* Profile Details Section */}
              <div className="md:col-span-2">
                <div className="flex justify-end mb-4">
                  {!editMode ? (
                    <button
                      onClick={handleEditToggle}
                      className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <PencilIcon className="h-4 w-4 mr-2" />
                      Edit Profile
                    </button>
                  ) : (
                    <div className="space-x-2">
                      <button
                        onClick={handleSaveProfile}
                        disabled={loading}
                        className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                      >
                        {loading ? (
                          <div className="animate-spin h-4 w-4 border-2 border-white rounded-full border-t-transparent mr-2"></div>
                        ) : (
                          <CheckIcon className="h-4 w-4 mr-2" />
                        )}
                        Save
                      </button>
                      <button
                        onClick={handleEditToggle}
                        disabled={loading}
                        className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                      >
                        <XMarkIcon className="h-4 w-4 mr-2" />
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formValues.firstName}
                      onChange={handleInputChange}
                      disabled={!editMode}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formValues.lastName}
                      onChange={handleInputChange}
                      disabled={!editMode}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      disabled={!editMode}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Role
                      </label>
                      <select
                        name="role"
                        value={formValues.role}
                        onChange={handleInputChange}
                        disabled={!editMode}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                      >
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="administrator">Administrator</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Department
                      </label>
                      <input
                        type="text"
                        name="department"
                        value={formValues.department}
                        onChange={handleInputChange}
                        disabled={!editMode}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {notification.show && (
          <div
            className={`fixed bottom-4 right-4 p-4 rounded-md shadow-lg ${
              notification.type === "success"
                ? "bg-green-50 border border-green-200"
                : "bg-red-50 border border-red-200"
            }`}
          >
            <div className="flex items-center">
              {notification.type === "success" ? (
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
              ) : (
                <ExclamationCircleIcon className="h-5 w-5 text-red-500 mr-2" />
              )}
              <p
                className={`text-sm font-medium ${
                  notification.type === "success"
                    ? "text-green-800"
                    : "text-red-800"
                }`}
              >
                {notification.message}
              </p>
              <button
                onClick={() =>
                  setNotification({ ...notification, show: false })
                }
                className="ml-4 text-gray-400 hover:text-gray-500"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
