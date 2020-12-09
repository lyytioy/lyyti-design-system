import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-home_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-home_svg__cls-1"
      d="M23.25 23.25V12L12 .75.75 12v11.25M8.643 11a6.476 6.476 0 007.218 1.451"
    />,
    <circle
      className="single-man-home_svg__cls-1"
      cx={12}
      cy={12.979}
      r={3.896}
    />,
    <path
      className="single-man-home_svg__cls-1"
      d="M18.375 23.25a6.577 6.577 0 00-12.75 0"
    />
  );

export default SvgSingleManHome;
