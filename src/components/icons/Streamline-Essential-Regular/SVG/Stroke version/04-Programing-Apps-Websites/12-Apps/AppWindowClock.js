import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-clock_svg__a"
      d="M21.763 8.253v-6a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h6M.763 5.253h21"
    />,
    <circle className="app-window-clock_svg__a" cx={17.26} cy={17.253} r={6} />,
    <path className="app-window-clock_svg__a" d="M19.912 17.253H17.26v-2.651" />
  );

export default SvgAppWindowClock;
