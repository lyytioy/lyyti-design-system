import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophone1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="microphone-1_svg__a"
      d="M10.5 19.5l.445 3.562a.5.5 0 00.5.438h1.118a.5.5 0 00.5-.438L13.5 19.5M16 16.5a1.428 1.428 0 01-.312.891l-1.375 1.718a1.042 1.042 0 01-.813.391h-3a1.041 1.041 0 01-.812-.39l-1.376-1.719A1.428 1.428 0 018 16.5v-7h8zM16 9.5v-7a1.5 1.5 0 00-.994-1.411A9.261 9.261 0 0012 .5a9.261 9.261 0 00-3.006.589A1.5 1.5 0 008 2.5v7zM8 11.5h8"
    />,
    <path className="microphone-1_svg__a" d="M11 11.5V15a1 1 0 002 0v-3.5z" />
  );

export default SvgMicrophone1;
