import React, { useState, useRef, useEffect } from "react";
import {
  PaperAirplaneIcon,
  UserIcon,
  ArrowPathIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { sendMessageToGroq } from "../utils/ai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ChevronDoubleLeftIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import GeneralNavbar from "../components/GeneralNavbar";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    // Add user message
    const userMessage = { text: input, sender: "user", timestamp: new Date() };
    setMessages([...messages, userMessage]);
    setInput("");

    // Set loading state for AI response
    setIsLoading(true);

    try {
      // Call the Groq API
      const response = await sendMessageToGroq(input);

      // Add AI response
      const aiMessage = {
        text: response,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      // Handle error
      const errorMessage = {
        text: "Sorry, I encountered an error while processing your request.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
      console.error("Error in chat:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <GeneralNavbar />

      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto py-4 px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold items-center">🤖 StudyBuddy</h1>
          <button
            onClick={clearChat}
            className="flex items-center text-sm border border-blue-400 hover:bg-blue-500 px-3 py-1 rounded"
          >
            <TrashIcon className="h-4 w-4 mr-1" />
            Clear Chat
          </button>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 overflow-y-auto p-4 container mx-auto max-w-4xl">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <ChatBubbleBottomCenterIcon className="h-12 w-12 mb-3" />
            <p>Start a conversation with the AI</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex mb-4 ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none shadow"
                }`}
              >
                <div className="flex items-center space-x-2 mb-1">
                  {message.sender === "user" ? (
                    <UserIcon className="h-4 w-4" />
                  ) : (
                    <ChatBubbleBottomCenterIcon className="h-4 w-4" />
                  )}
                  <span className="text-xs font-medium">
                    {message.sender === "user" ? "You" : "AI"}
                  </span>
                  <span className="text-xs opacity-75">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
                {message.sender === "user" ? (
                  <p className="text-sm">{message.text}</p>
                ) : (
                  <div className="markdown-content text-sm">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code({ inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || "");
                          return !inline && match ? (
                            <SyntaxHighlighter
                              style={solarizedlight}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            >
                              {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        },
                      }}
                    >
                      {message.text}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-white text-gray-800 px-4 py-2 rounded-lg rounded-bl-none shadow">
              <div className="flex items-center space-x-2">
                <ArrowPathIcon className="h-4 w-4 animate-spin" />
                <span className="text-xs">AI is thinking...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="mb-2 rounded-lg p-4">
        <div className="container mx-auto max-w-4xl">
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-1.5 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || input.trim() === ""}
              className={`bg-blue-600 p-2 rounded-lg text-white ${
                isLoading || input.trim() === ""
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-indigo-700"
              }`}
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
