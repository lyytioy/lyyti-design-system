import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitorRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-monitor-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="desktop-monitor-remove_svg__a"
      d="M15.75 23.25h-7.5l.75-3h6l.75 3zM6 23.25h12M.75 17.25h22.5M23.25 14.25v3a3 3 0 01-3 3H3.75a3 3 0 01-3-3V6.75a3 3 0 013-3h4.5"
    />,
    <circle
      className="desktop-monitor-remove_svg__a"
      cx={17.25}
      cy={6.75}
      r={6}
    />,
    <path
      className="desktop-monitor-remove_svg__a"
      d="M19.371 4.629l-4.242 4.242M19.371 8.871l-4.242-4.242"
    />
  );

export default SvgDesktopMonitorRemove;
