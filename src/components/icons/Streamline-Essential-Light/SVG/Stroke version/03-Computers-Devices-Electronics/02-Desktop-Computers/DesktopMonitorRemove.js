import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitorRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-monitor-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="desktop-monitor-remove_svg__a"
      cx={17.5}
      cy={6.5}
      r={6}
    />,
    <path
      className="desktop-monitor-remove_svg__a"
      d="M19.621 4.379l-4.242 4.242M19.621 8.621l-4.242-4.242M.5 16.5h21M21.5 13.5v5a1 1 0 01-1 1h-19a1 1 0 01-1-1v-13a1 1 0 011-1h8M8 23.5a6.979 6.979 0 001.5-4M14 23.5a6.979 6.979 0 01-1.5-4M6.5 23.5h9"
    />
  );

export default SvgDesktopMonitorRemove;
