import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
}

export function Vercel({ width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path fill="#000" d="M12 1l12 21H0L12 1z"></path>
    </svg>
  );
}
