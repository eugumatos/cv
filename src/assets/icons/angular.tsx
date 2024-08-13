import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
}

export function Angular({ width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path fill="#DD0031" d="M16 2L3 7l2 17 11 6 11-6 2-17-13-5z"></path>
      <path fill="#C3002F" d="M16 2v28l11-6 2-17-13-5z"></path>
      <path
        fill="#fff"
        d="M16 5.094l-8.127 18.27h3.03l1.634-4.088h6.898l1.634 4.088h3.03l-8.1-18.27zm2.374 11.662h-4.748L16 11.03l2.374 5.726z"
      ></path>
    </svg>
  );
}
