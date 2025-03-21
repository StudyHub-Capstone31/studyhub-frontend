import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  PaperAirplaneIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

function Discussion() {
  const { forumId } = useParams();
  const navigate = useNavigate();
  const [forum, setForum] = useState(null);
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  useEffect(() => {
    // Simulating API call to fetch forum data and discussions
    setTimeout(() => {
      const mockForumData = {
        id: forumId,
        title: [
          "General Discussion",
          "Computer Science",
          "Mathematics",
          "Study Groups",
          "Research Opportunities",
        ][Number(forumId) - 1],
        description:
          "This is a forum for discussing various topics related to this subject.",
      };

      const mockDiscussions = [
        {
          id: 1,
          userId: 1,
          username: "JohnDoe",
          avatar: "https://mui.com/static/images/avatar/1.jpg",
          content:
            "Has anyone started working on the final project yet? I'm looking for some ideas.",
          timestamp: "2023-12-28T13:45:00Z",
          likes: 5,
          replies: 2,
        },
        {
          id: 2,
          userId: 2,
          username: "JaneSmith",
          avatar: "https://mui.com/static/images/avatar/2.jpg",
          content:
            "I'm planning to work on a machine learning project that analyzes student performance data. Would anyone be interested in collaborating?",
          timestamp: "2023-12-27T10:20:00Z",
          likes: 8,
          replies: 3,
        },
        {
          id: 3,
          userId: 3,
          username: "MikeJohnson",
          avatar: "https://mui.com/static/images/avatar/3.jpg",
          content:
            "Does anyone have the notes from yesterday's lecture? I missed it due to a doctor's appointment.",
          timestamp: "2023-12-26T15:30:00Z",
          likes: 2,
          replies: 4,
        },
        {
          id: 4,
          userId: 4,
          username: "SarahWilliams",
          avatar: "https://mui.com/static/images/avatar/4.jpg",
          content:
            "I found a great online resource for this subject. Here's the link: www.example.com/resource",
          timestamp: "2023-12-25T09:15:00Z",
          likes: 12,
          replies: 1,
        },
      ];

      setForum(mockForumData);
      setDiscussions(mockDiscussions);
      setLoading(false);
    }, 1000);
  }, [forumId]);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  const handleSubmitPost = () => {
    if (newPost.trim() === "") return;

    const newDiscussion = {
      id: discussions.length + 1,
      userId: 5, // Assuming current user ID
      username: "CurrentUser", // Assuming current username
      avatar: "https://mui.com/static/images/avatar/5.jpg", // Assuming current user avatar
      content: newPost,
      timestamp: new Date().toISOString(),
      likes: 0,
      replies: 0,
    };

    setDiscussions([newDiscussion, ...discussions]);
    setNewPost("");
  };

  const handleDeleteClick = (postId) => {
    setPostToDelete(postId);
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    setDiscussions(
      discussions.filter((discussion) => discussion.id !== postToDelete)
    );
    setOpenDialog(false);
    setPostToDelete(null);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center mb-4">
        <button
          onClick={() => navigate("/discussion-forum")}
          className="mr-2 p-1 rounded-full hover:bg-gray-200"
        >
          <ArrowLeftIcon className="h-5 w-5 text-gray-600" />
        </button>
        <nav className="text-sm">
          <Link
            to="/discussion-forum"
            className="text-gray-600 hover:text-gray-900"
          >
            Forums
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900">
            {loading ? "Loading..." : forum?.title}
          </span>
        </nav>
      </div>

      {loading ? (
        <div className="flex justify-center my-12">
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-3">{forum.title}</h1>
          <p className="text-gray-600 mb-6">{forum.description}</p>

          <div className="bg-white rounded-lg shadow-md p-5 mb-8">
            <h2 className="text-xl font-medium mb-3">Create a new post</h2>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="3"
              placeholder="Share your thoughts or questions..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            ></textarea>
            <div className="flex justify-end mt-3">
              <button
                className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleSubmitPost}
                disabled={newPost.trim() === ""}
              >
                Post
                <PaperAirplaneIcon className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          <h2 className="text-xl font-medium mb-4">Recent Discussions</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {discussions.map((discussion) => (
                <li key={discussion.id} className="p-4">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={discussion.avatar}
                        alt={discussion.username}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-sm font-medium">
                            {discussion.username}
                          </h3>
                          <span className="text-xs text-gray-500">
                            {formatDate(discussion.timestamp)}
                          </span>
                        </div>
                        {discussion.userId === 5 && (
                          <div>
                            <button className="p-1 rounded-full text-blue-600 hover:bg-blue-100">
                              <PencilIcon className="h-4 w-4" />
                            </button>
                            <button
                              className="p-1 rounded-full text-red-600 hover:bg-red-100"
                              onClick={() => handleDeleteClick(discussion.id)}
                            >
                              <TrashIcon className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-gray-800">
                        {discussion.content}
                      </p>
                      <div className="mt-2 flex items-center">
                        <button className="flex items-center text-sm text-gray-600 hover:text-blue-600 mr-4">
                          <ArrowLeftIcon className="h-4 w-4 mr-1" />
                          Reply ({discussion.replies})
                        </button>
                        <span className="text-sm text-gray-500">
                          {discussion.likes} likes
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {openDialog && (
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Delete Post
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete this post? This action
                        cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleDeleteConfirm}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpenDialog(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Discussion;
