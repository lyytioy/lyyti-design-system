import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-flash_svg__a"
      d="M21.757 6.753v-4.5a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h12M.757 5.253h21"
    />,
    <path
      className="app-window-flash_svg__a"
      d="M20.26 9.753l-5.911 6.883a.375.375 0 00.286.617h2.625v6l5.911-6.882a.376.376 0 00-.286-.618H20.26z"
    />
  );

export default SvgAppWindowFlash;
