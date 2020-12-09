import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-warning_svg__a"
      d="M21.76 10.5V2.253a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h6M.76 5.253h21M17.256 20.253a.375.375 0 11-.375.375.375.375 0 01.375-.375M17.256 18.003v-3"
    />,
    <path
      className="app-window-warning_svg__a"
      d="M23.069 20.686a1.774 1.774 0 01-1.587 2.567H13.03a1.773 1.773 0 01-1.586-2.567l4.225-8.452a1.774 1.774 0 013.174 0z"
    />
  );

export default SvgAppWindowWarning;
