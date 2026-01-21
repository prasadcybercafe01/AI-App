
import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
  prompt: string;
  onDownload: () => void;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading, error, prompt, onDownload }) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <LoadingSpinner />
          <p className="mt-4 text-gray-300 font-medium">Generating your vision...</p>
          <p className="mt-2 text-sm text-gray-400 max-w-sm">"{prompt}"</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center text-red-400 bg-red-900/20 p-6 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-semibold">Generation Failed</h3>
          <p className="mt-2 text-sm text-red-300">{error}</p>
        </div>
      );
    }

    if (imageUrl) {
      return (
        <div className="relative group w-full h-full">
          <img
            src={imageUrl}
            alt={prompt || 'Generated AI wallpaper'}
            className="w-full h-full object-contain rounded-xl shadow-2xl shadow-black/30"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
            <button 
              onClick={onDownload}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white font-semibold py-2 px-5 rounded-lg hover:bg-white/20 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 mb-4"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path><path d="m10.5 16.5 2-2.5 2 2.5"></path><path d="m12.5 12-1.5-2-1.5 2"></path><path d="m8.5 12-2-2.5 2-2.5"></path><path d="m14.5 16.5 1.5-2 1.5 2"></path><circle cx="16.5" cy="7.5" r=".5"></circle></svg>
        <h3 className="text-xl font-semibold text-gray-400">Your wallpaper awaits</h3>
        <p className="mt-2 text-gray-500">Describe an image, pick a style, and click "Generate".</p>
      </div>
    );
  };

  return (
    <div className="bg-gray-800/20 border border-dashed border-gray-700/50 rounded-2xl w-full aspect-[9/16] lg:aspect-auto lg:h-full flex items-center justify-center p-4">
      {renderContent()}
    </div>
  );
};
