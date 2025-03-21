import React, { useState, useEffect } from "react";
import { BellIcon, BellAlertIcon } from "@heroicons/react/24/outline";

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call to fetch announcements
    setTimeout(() => {
      const mockAnnouncements = [
        {
          id: 1,
          title: "Spring Semester Registration",
          content:
            "Registration for spring semester courses opens on Monday, January 15th, 2024.",
          date: "2023-12-15",
          important: true,
        },
        {
          id: 2,
          title: "System Maintenance",
          content:
            "StudyHub will be down for maintenance on Saturday from 2AM to 5AM EST.",
          date: "2023-12-20",
          important: false,
        },
        {
          id: 3,
          title: "New Course Materials",
          content:
            "New course materials have been uploaded for Computer Science 101.",
          date: "2023-12-22",
          important: false,
        },
        {
          id: 4,
          title: "Holiday Schedule",
          content:
            "Campus will be closed from December 24th to January 2nd for the holiday break.",
          date: "2023-12-23",
          important: true,
        },
      ];
      setAnnouncements(mockAnnouncements);
      setLoading(false);
    }, 1000);
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Announcements</h1>

      {loading ? (
        <div className="flex justify-center my-12">
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-4">
          <ul className="divide-y divide-gray-200">
            {announcements.map((announcement, index) => (
              <li key={announcement.id} className="py-4">
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    {announcement.important ? (
                      <BellAlertIcon className="h-6 w-6 text-red-500" />
                    ) : (
                      <BellIcon className="h-6 w-6 text-blue-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h2
                      className={`text-xl font-medium ${
                        announcement.important
                          ? "text-red-600"
                          : "text-blue-600"
                      }`}
                    >
                      {announcement.title}
                    </h2>
                    <p className="text-gray-700 my-2">{announcement.content}</p>
                    <p className="text-sm text-gray-500">
                      Posted on: {formatDate(announcement.date)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Announcements;
