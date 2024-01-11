import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4 text-rose-500">404 - Page Not Found😞</h1>
        <p className="text-lg text-center">
          The page you are looking for does not exist. Let's go back to the{' '}
          <Link to="/" className="text-blue-500 underline">
            Homepage
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default NotFound;