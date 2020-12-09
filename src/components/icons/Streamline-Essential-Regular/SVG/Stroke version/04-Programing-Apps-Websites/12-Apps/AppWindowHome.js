import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-home_svg__a"
      d="M21.754 11.253v-9a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h7.5M.754 5.253h21"
    />,
    <path
      className="app-window-home_svg__a"
      d="M12.76 15.951v5.8a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-5.8"
    />,
    <path
      className="app-window-home_svg__a"
      d="M11.26 17.264l4.518-3.954a2.252 2.252 0 012.964 0l4.518 3.954M18.76 23.253h-3v-3a1.5 1.5 0 013 0z"
    />
  );

export default SvgAppWindowHome;
