import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowFlag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-flag_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-flag_svg__a"
      d="M21.76 9.753v-7.5a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h9M.76 5.253h21"
    />,
    <path
      className="app-window-flag_svg__a"
      d="M14.262 12.753h8.999v6h-8.999zM14.262 12.753v10.5"
    />
  );

export default SvgAppWindowFlag;
