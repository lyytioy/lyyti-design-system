import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManFlag1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-flag-1_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-flag-1_svg__cls-1"
      d="M.75.75v22.5M11.25 9.75H.75v-7.5h10.5L7.5 6l3.75 3.75z"
    />,
    <circle
      className="single-man-flag-1_svg__cls-1"
      cx={18.75}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-flag-1_svg__cls-1"
      d="M18.75 8.25v6M21 23.25l.75-7.5h1.5v-3a4.5 4.5 0 00-9 0v3h1.5l.75 7.5z"
    />
  );

export default SvgSingleManFlag1;
