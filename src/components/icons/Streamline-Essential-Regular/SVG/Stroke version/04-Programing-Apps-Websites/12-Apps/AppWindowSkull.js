import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowSkull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-skull_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-skull_svg__a"
      d="M19.51 21h1.5a1.5 1.5 0 001.5-1.5V3a1.5 1.5 0 00-1.5-1.5h-18A1.5 1.5 0 001.51 3v16.5a1.5 1.5 0 001.5 1.5h1.5M1.51 6.003h21"
    />,
    <path
      className="app-window-skull_svg__a"
      d="M18.01 15a6 6 0 00-12 0 4.9 4.9 0 003 4.638v2.112a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75v-2.109a4.9 4.9 0 003-4.641zM12.01 22.503v-2.25"
    />,
    <path
      className="app-window-skull_svg__a"
      d="M9.76 14.253a.75.75 0 11-.75.75.75.75 0 01.75-.75M14.26 14.253a.75.75 0 11-.75.75.75.75 0 01.75-.75"
    />
  );

export default SvgAppWindowSkull;
