import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-shield_svg__cls-2{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      d="M17.056 16a5.321 5.321 0 00-10 0"
      strokeWidth={0.989}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      className="single-man-shield_svg__cls-2"
      d="M9.2 6.1a5.4 5.4 0 006.022 1.21"
    />,
    <circle
      className="single-man-shield_svg__cls-2"
      cx={12}
      cy={7.75}
      r={3.25}
    />,
    <path
      className="single-man-shield_svg__cls-2"
      d="M23.5 9.125A14.7 14.7 0 0112 23.5 14.7 14.7 0 01.5 9.125V1.5a1 1 0 011-1h21a1 1 0 011 1z"
    />
  );

export default SvgSingleManShield;
