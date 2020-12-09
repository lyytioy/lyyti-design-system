import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorHand1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-hand-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-hand-1_svg__a"
      d="M11.5 3A1.5 1.5 0 0010 1.5 1.5 1.5 0 008.5 3v11.25L6.061 12.3a1.539 1.539 0 00-2.242.348 1.537 1.537 0 000 1.707l3.65 5.475a6 6 0 004.992 2.67h2.918A5.118 5.118 0 0019 21a5.122 5.122 0 001.5-3.621V10.5A1.5 1.5 0 0019 9a1.5 1.5 0 00-1.5 1.5v-.75a1.5 1.5 0 00-1.5-1.5 1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 00-1.5-1.5 1.5 1.5 0 00-1.5 1.5zM11.5 9.747v2.25M14.5 9.747v2.25M17.5 10.497v1.5"
    />
  );

export default SvgCursorHand1;
