import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-check_svg__a"
      d="M21.76 9.753v-7.5a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h6M.76 5.253h21M23.26 17.253a6 6 0 11-6-6"
    />,
    <path
      className="app-window-check_svg__a"
      d="M23.26 12.753l-5.47 5.47a.75.75 0 01-1.061 0L15.01 16.5"
    />
  );

export default SvgAppWindowCheck;
