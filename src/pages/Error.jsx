import { HomeIcon } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
      <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">404</h1>
      <p className="text-2xl font-semibold mt-6">Page Not Found</p>
      <p className="text-gray-500 mt-2 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700 transition"
      >
        <HomeIcon className="w-5 h-5" />
        Go Home
      </Link>
    </div>

  )
};

export default Error
