import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
}

export function Close({ width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="-0.5 0 25 25"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 21.32l18-18M3 3.32l18 18"
      ></path>
    </svg>
  );
}
