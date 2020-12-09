import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-add_svg__a"
      d="M21.76 8.253v-6a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h6M.76 5.253h21"
    />,
    <circle className="app-window-add_svg__a" cx={17.26} cy={17.253} r={6} />,
    <path
      className="app-window-add_svg__a"
      d="M17.26 14.253v6M14.26 17.253h6"
    />
  );

export default SvgAppWindowAdd;
