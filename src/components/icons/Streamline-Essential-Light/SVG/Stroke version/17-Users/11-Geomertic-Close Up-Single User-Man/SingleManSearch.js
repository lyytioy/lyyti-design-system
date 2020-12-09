import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-search_svg__cls-2{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      d="M15.556 16a5.321 5.321 0 00-10 0"
      strokeWidth={0.989}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      className="single-man-search_svg__cls-2"
      d="M7.7 6.1a5.4 5.4 0 006.022 1.21"
    />,
    <circle
      className="single-man-search_svg__cls-2"
      cx={10.5}
      cy={7.75}
      r={3.25}
    />,
    <circle
      className="single-man-search_svg__cls-2"
      cx={10.5}
      cy={10.5}
      r={10}
    />,
    <path
      className="single-man-search_svg__cls-2"
      d="M23.5 23.5l-5.929-5.929"
    />
  );

export default SvgSingleManSearch;
