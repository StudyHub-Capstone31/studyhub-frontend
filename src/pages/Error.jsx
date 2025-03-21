import React from "react";

function Error() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-2">404</h1>
          <h2 className="text-xl font-semibold mb-4">Page Not Found</h2>
          <a
            href="/"
            className="px-6 py-2 border border-blue-600 text-blue-600 mt-8 font-medium rounded-md hover:bg-blue-700 hover:text-white transition-colors"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </main>
  );
}

export default Error;
