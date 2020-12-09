import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-home_svg__cls-2{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      d="M17.056 20a5.321 5.321 0 00-10 0"
      strokeWidth={0.989}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      className="single-man-home_svg__cls-2"
      d="M9.2 10.1a5.4 5.4 0 006.022 1.21"
    />,
    <circle
      className="single-man-home_svg__cls-2"
      cx={12}
      cy={11.75}
      r={3.25}
    />,
    <path
      className="single-man-home_svg__cls-2"
      d="M1.5 23.5a1 1 0 01-1-1V8.8a1 1 0 01.429-.821l10.5-7.3a1 1 0 011.142 0l10.5 7.3a1 1 0 01.429.821v13.7a1 1 0 01-1 1z"
    />
  );

export default SvgSingleManHome;
