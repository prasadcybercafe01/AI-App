
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full max-w-6xl text-center">
      <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 py-2">
        AI Wallpaper Generator
      </h1>
      <p className="mt-2 text-lg text-gray-400">
        Craft your perfect wallpaper with the power of Gemini.
      </p>
    </header>
  );
};
