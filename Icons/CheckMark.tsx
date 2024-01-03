import React from 'react';

const CheckMark = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M416 128L192 384l-96-96"
      />
    </svg>
  );
};

export default CheckMark;
