import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHeadphonesCable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".headphones-cable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="headphones-cable_svg__a"
      d="M8.25 17.25h-1.5V6.75h1.5a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5zM6.75 16.5a4.5 4.5 0 010-9M14.25 17.25h1.5V6.75h-1.5a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5zM15.75 16.5a4.5 4.5 0 000-9"
    />,
    <path
      className="headphones-cable_svg__a"
      d="M2.25 12V9.75a9 9 0 0118 0V12M.75 21.75h3M6.75 23.25a1.5 1.5 0 000-3h-3v3z"
    />,
    <path
      className="headphones-cable_svg__a"
      d="M21 17.25a2.25 2.25 0 010 4.5H8.25"
    />
  );

export default SvgHeadphonesCable;
