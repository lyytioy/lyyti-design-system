import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitorClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-monitor-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="desktop-monitor-clock_svg__a"
      d="M15.75 23.25h-7.5l.75-3h6l.75 3zM6 23.25h12M.75 17.25h22.5M23.25 14.25v3a3 3 0 01-3 3H3.75a3 3 0 01-3-3V6.75a3 3 0 013-3h4.5"
    />,
    <circle
      className="desktop-monitor-clock_svg__a"
      cx={17.25}
      cy={6.75}
      r={6}
    />,
    <path
      className="desktop-monitor-clock_svg__a"
      d="M19.902 6.75H17.25V4.098"
    />
  );

export default SvgDesktopMonitorClock;
