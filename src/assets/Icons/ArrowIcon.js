import React from "react";

export default function ArrowIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height="30"
      width="30"
      viewBox="0 0 24 24"
    >
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <polygon
          points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"
          fill="white"
        />
      </g>
    </svg>
  );
}
