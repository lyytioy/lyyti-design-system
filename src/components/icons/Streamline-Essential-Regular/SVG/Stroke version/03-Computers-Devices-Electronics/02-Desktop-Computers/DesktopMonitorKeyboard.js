import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitorKeyboard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-monitor-keyboard_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="desktop-monitor-keyboard_svg__a"
      d="M19.83.75l-6.75 18.294a5.965 5.965 0 005.436-3.9l2.915-7.9A5.967 5.967 0 0019.83.75z"
    />,
    <path
      className="desktop-monitor-keyboard_svg__a"
      d="M19.754 11.771l3.168 9.5A1.5 1.5 0 0121.5 23.25h-5.42"
    />,
    <circle
      className="desktop-monitor-keyboard_svg__a"
      cx={8.5}
      cy={21.75}
      r={1.5}
    />,
    <path
      className="desktop-monitor-keyboard_svg__a"
      d="M1 23.25l6.883-2.866"
    />
  );

export default SvgDesktopMonitorKeyboard;
