import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-refresh_svg__a"
      d="M21.76 8.253v-6a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h6M.76 5.253h21M19.508 15.753h3.75v-4.5M23.069 15.753A6 6 0 1021.948 21"
    />
  );

export default SvgAppWindowRefresh;
