import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
}

export function Vue({ width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path fill="#41B883" d="M2 4l14 24L30 4h-5.5L16 18.5 7.5 4H2z"></path>
      <path
        fill="#35495E"
        d="M7.5 4L16 18.5 24.5 4h-5l-3.435 6.013L12.5 4h-5z"
      ></path>
    </svg>
  );
}
