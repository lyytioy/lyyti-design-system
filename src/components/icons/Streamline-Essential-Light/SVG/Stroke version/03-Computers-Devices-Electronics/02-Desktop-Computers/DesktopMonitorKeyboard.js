import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitorKeyboard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-monitor-keyboard_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="desktop-monitor-keyboard_svg__a"
      d="M20.526 11.551l2.958 10.77A1 1 0 0122.5 23.5h-5M18.525 15.651a6.736 6.736 0 01-5.154 3.722L22.58.5a6.74 6.74 0 01.238 6.353z"
    />,
    <circle
      className="desktop-monitor-keyboard_svg__a"
      cx={8}
      cy={22}
      r={1.5}
    />,
    <path
      className="desktop-monitor-keyboard_svg__a"
      d="M7.423 20.616L.5 23.5"
    />
  );

export default SvgDesktopMonitorKeyboard;
