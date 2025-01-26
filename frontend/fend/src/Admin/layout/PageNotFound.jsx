import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-800">
      <div className="container flex flex-col items-center text-center">
        <div className="flex flex-col gap-6 max-w-md">
          <h2 className="font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-300">
            Sorry, we couldn't find this page.
          </p>
          <Link
            to="/Admin"
            className="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:bg-purple-700 transition"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
