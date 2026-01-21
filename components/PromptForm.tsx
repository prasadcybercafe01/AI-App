
import React from 'react';
import { StylePreset, AspectRatio } from '../types';
import { STYLE_PRESETS, ASPECT_RATIOS } from '../constants';

interface PromptFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  aspectRatio: AspectRatio;
  setAspectRatio: (aspectRatio: AspectRatio) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const StyleButton: React.FC<{ preset: StylePreset; onClick: () => void }> = ({ preset, onClick }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-sm bg-gray-700/50 hover:bg-gray-700 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
  >
    {preset.name}
  </button>
);

export const PromptForm: React.FC<PromptFormProps> = ({
  prompt,
  setPrompt,
  aspectRatio,
  setAspectRatio,
  onSubmit,
  isLoading,
}) => {
  const addStyle = (style: StylePreset) => {
    if (prompt.trim() === '') {
      setPrompt(style.keywords);
    } else {
      setPrompt(`${prompt}, ${style.keywords}`);
    }
  };

  return (
    <div className="bg-gray-800/50 p-6 rounded-2xl shadow-lg border border-gray-700/50 flex flex-col gap-6 sticky top-8">
      <div>
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-2">
          Describe your wallpaper
        </label>
        <textarea
          id="prompt"
          rows={5}
          className="w-full bg-gray-900/70 border border-gray-700 rounded-lg p-3 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200 placeholder-gray-500"
          placeholder="e.g., A tranquil bamboo forest at sunrise, misty atmosphere"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-300 mb-3">Add a style</h3>
        <div className="flex flex-wrap gap-2">
          {STYLE_PRESETS.map((preset) => (
            <StyleButton key={preset.name} preset={preset} onClick={() => addStyle(preset)} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-300 mb-3">Aspect Ratio</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {ASPECT_RATIOS.map((ratio) => (
            <button
              key={ratio.value}
              onClick={() => setAspectRatio(ratio.value)}
              className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 border-2 ${
                aspectRatio === ratio.value
                  ? 'bg-indigo-600 border-indigo-500 text-white'
                  : 'bg-gray-700/50 border-gray-700 hover:bg-gray-700 hover:border-gray-600 text-gray-300'
              }`}
            >
              {ratio.icon}
              <span className="text-xs mt-1.5">{ratio.label}</span>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onSubmit}
        disabled={isLoading || !prompt}
        className="w-full flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </>
        ) : (
          'Generate Wallpaper'
        )}
      </button>
    </div>
  );
};
