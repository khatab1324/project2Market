import React from "react";
import { cn } from "../lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1]  h-[70%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g className="star-background">
        <circle cx="500" cy="400" r="2" fill="white" />
        <circle cx="1500" cy="600" r="3" fill="white" />
        <circle cx="2500" cy="800" r="2" fill="white" />
        <circle cx="3500" cy="200" r="4" fill="white" />
        <circle cx="300" cy="1200" r="2" fill="white" />
        <circle cx="1700" cy="1400" r="3" fill="white" />
        <circle cx="2700" cy="1600" r="2" fill="white" />
        <circle cx="3700" cy="1800" r="4" fill="white" />
        <circle cx="1550" cy="1500" r="3" fill="white" />
        <circle cx="6500" cy="700" r="3" fill="white" />
        <circle cx="3500" cy="800" r="2" fill="white" />
        <circle cx="2500" cy="600" r="4" fill="white" />
        <circle cx="100" cy="200" r="2" fill="blue" />
        <circle cx="700" cy="640" r="3" fill="blue" />
        <path
          cx="1660"
          cy="1500"
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill="white"
          transform="translate(3500 200) scale(0.9)"
        />{" "}
        <path
          cx="1660"
          cy="1500"
          fill="white"
          
          d="M62.43,122.88h-1.98c0-16.15-6.04-30.27-18.11-42.34C30.27,68.47,16.16,62.43,0,62.43v-1.98 c16.16,0,30.27-6.04,42.34-18.14C54.41,30.21,60.45,16.1,60.45,0h1.98c0,16.15,6.04,30.27,18.11,42.34 c12.07,12.07,26.18,18.11,42.34,18.11v1.98c-16.15,0-30.27,6.04-42.34,18.11C68.47,92.61,62.43,106.72,62.43,122.88L62.43,122.88z"
        />
        <circle cx="740" cy="1800" r="4" fill="blue" />
        {/* Add more stars as needed */}
      </g>
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};
