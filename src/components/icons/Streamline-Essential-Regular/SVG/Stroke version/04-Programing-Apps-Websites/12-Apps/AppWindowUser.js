import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-user_svg__a"
      d="M21.76 8.253v-6a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h7.5M.76 5.253h21"
    />,
    <circle
      className="app-window-user_svg__a"
      cx={18.01}
      cy={13.128}
      r={2.625}
    />,
    <path
      className="app-window-user_svg__a"
      d="M18.01 16.5a5.251 5.251 0 00-5.25 5.25v1.5h10.5v-1.5a5.25 5.25 0 00-5.25-5.25zM3.76 9.753h1.5M3.76 12.753h1.5M3.76 15.753h1.5M8.26 9.753h5.25M8.26 12.753h4.5M8.26 15.753h3.75"
    />
  );

export default SvgAppWindowUser;
