// Fix: Import React to resolve 'Cannot find namespace 'JSX''.
import React from 'react';

export type AspectRatio = '1:1' | '16:9' | '9:16' | '4:3' | '3:4';

export interface StylePreset {
  name: string;
  keywords: string;
}

export interface AspectRatioOption {
  value: AspectRatio;
  label: string;
  icon: JSX.Element;
}