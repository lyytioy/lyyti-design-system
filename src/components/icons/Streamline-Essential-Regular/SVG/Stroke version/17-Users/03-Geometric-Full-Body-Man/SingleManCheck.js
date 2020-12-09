import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-check_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-check_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-check_svg__cls-1"
      d="M5.25 8.25v6M7.5 23.25l.75-7.5h1.5v-3a4.5 4.5 0 00-9 0v3h1.5l.75 7.5zM23.25 6.75a6 6 0 11-6-6"
    />,
    <path
      className="single-man-check_svg__cls-1"
      d="M23.25 2.249l-5.47 5.47a.749.749 0 01-1.06 0L15 6"
    />
  );

export default SvgSingleManCheck;
