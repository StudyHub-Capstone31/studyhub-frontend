import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  PaperAirplaneIcon,
  PencilIcon,
  TrashIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  UserIcon,
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

  // Vote state management
  const handleVote = (id, direction) => {
    setDiscussions(
      discussions.map((discussion) => {
        if (discussion.id === id) {
          const newLikes =
            direction === "up"
              ? discussion.likes + 1
              : Math.max(0, discussion.likes - 1);
          return { ...discussion, likes: newLikes };
        }
        return discussion;
      })
    );
  };

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
          topic: "Projects",
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
      topic: "General", // Default topic
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
    <div className="bg-gray-50 max-w-4xl mx-auto p-4 rounded-lg">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full border border-indigo-500 flex items-center justify-center mr-3">
            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
          </div>
          <Link to="/">
            <h1 className="text-2xl font-bold text-gray-800">StudyHub</h1>
          </Link>
        </div>

        <div className="flex items-center">
          <button
            onClick={() => navigate("/discussion-forum")}
            className="flex items-center px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Forums
          </button>
        </div>
      </header>

      {loading ? (
        <div className="flex justify-center my-12">
          <div className="animate-spin h-10 w-10 border-4 border-indigo-500 rounded-full border-t-transparent"></div>
        </div>
      ) : (
        <>
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-indigo-500 mb-2">
              {forum.title}
            </h2>
            <p className="text-gray-600">{forum.description}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-5 mb-8">
            <h2 className="text-lg font-medium mb-3">Create a new post</h2>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              rows="3"
              placeholder="Share your thoughts or questions..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            ></textarea>
            <div className="flex justify-end mt-3">
              <button
                className="flex items-center px-4 py-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                onClick={handleSubmitPost}
                disabled={newPost.trim() === ""}
              >
                Post
                <PaperAirplaneIcon className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          <h2 className="text-lg font-medium mb-4">Recent Discussions</h2>
          <div className="space-y-4">
            {discussions.map((discussion) => (
              <div
                key={discussion.id}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <div className="flex">
                  <div className="w-16 bg-gray-100 p-2 flex flex-col items-center">
                    <button
                      onClick={() => handleVote(discussion.id, "up")}
                      className="focus:outline-none hover:text-indigo-500 transition-colors"
                    >
                      <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                    </button>
                    <span className="font-bold my-1">{discussion.likes}</span>
                    <button
                      onClick={() => handleVote(discussion.id, "down")}
                      className="focus:outline-none hover:text-indigo-500 transition-colors"
                    >
                      <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  <div className="p-4 flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium">
                        {discussion.topic}
                      </span>
                      {discussion.userId === 5 && (
                        <div className="ml-auto flex space-x-2">
                          <button className="p-1 rounded-full text-indigo-600 hover:bg-indigo-50">
                            <PencilIcon className="h-4 w-4" />
                          </button>
                          <button
                            className="p-1 rounded-full text-red-600 hover:bg-red-50"
                            onClick={() => handleDeleteClick(discussion.id)}
                          >
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-800 text-sm mb-4">
                      {discussion.content}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <img
                          src={discussion.avatar}
                          alt={discussion.username}
                          className="w-5 h-5 rounded-full mr-2"
                        />
                        <span>
                          Posted by{" "}
                          <span className="font-medium text-gray-700">
                            {discussion.username}
                          </span>{" "}
                          · {formatDate(discussion.timestamp)}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span>{discussion.replies} replies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
