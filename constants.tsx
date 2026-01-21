import React from 'react';
import { StylePreset, AspectRatioOption } from './types';

export const STYLE_PRESETS: StylePreset[] = [
  { name: 'Photorealistic', keywords: 'photorealistic, 8k, hyper-detailed, cinematic lighting' },
  { name: 'Anime', keywords: 'anime style, vibrant, studio ghibli inspired, makoto shinkai' },
  { name: 'Abstract', keywords: 'abstract, geometric, colorful, modern art' },
  { name: 'Fantasy', keywords: 'epic fantasy, majestic, matte painting, lord of the rings style' },
  { name: 'Sci-Fi', keywords: 'sci-fi, futuristic, cyberpunk, neon lights, blade runner aesthetic' },
  { name: 'Minimalist', keywords: 'minimalist, simple, clean, flat design' },
];

export const ASPECT_RATIOS: AspectRatioOption[] = [
  { value: '9:16', label: 'Phone', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg> },
  { value: '16:9', label: 'Desktop', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> },
  { value: '1:1', label: 'Square', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg> },
  { value: '3:4', label: 'Portrait', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect></svg> },
  // Fix: Add missing '4:3' aspect ratio option.
  { value: '4:3', label: 'Classic', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect></svg> },
];