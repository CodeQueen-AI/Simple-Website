import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">About Us 🌟</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to my simple website! This application is built using Next.js, a powerful React framework 
          that allows for server-side rendering and static site generation.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Next.js enhances the development experience by providing features like automatic code splitting, 
          optimized performance, and easy routing.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Thank you for visiting! 
        </p>
      </div>
    </div>
  );
};

export default About;
