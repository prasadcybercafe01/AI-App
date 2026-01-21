
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { PromptForm } from './components/PromptForm';
import { ImageDisplay } from './components/ImageDisplay';
import { generateWallpaper } from './services/geminiService';
import { AspectRatio } from './types';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('9:16');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt || isLoading) return;

    setIsLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const base64Image = await generateWallpaper(prompt, aspectRatio);
      if (base64Image) {
        setImageUrl(`data:image/png;base64,${base64Image}`);
      } else {
        throw new Error('The AI did not return an image. Please try a different prompt.');
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      console.error(errorMessage);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, aspectRatio, isLoading]);
  
  const handleDownload = () => {
    if (!imageUrl) return;
    const link = document.createElement('a');
    link.href = imageUrl;
    // Sanitize prompt to create a valid filename
    const fileName = prompt.substring(0, 30).replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'ai_wallpaper';
    link.download = `${fileName}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-4 selection:bg-indigo-500 selection:text-white">
      <Header />
      <main className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 mt-8">
        <div className="lg:w-1/3 w-full">
          <PromptForm
            prompt={prompt}
            setPrompt={setPrompt}
            aspectRatio={aspectRatio}
            setAspectRatio={setAspectRatio}
            onSubmit={handleGenerate}
            isLoading={isLoading}
          />
        </div>
        <div className="lg:w-2/3 w-full">
          <ImageDisplay
            imageUrl={imageUrl}
            isLoading={isLoading}
            error={error}
            prompt={prompt}
            onDownload={handleDownload}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
