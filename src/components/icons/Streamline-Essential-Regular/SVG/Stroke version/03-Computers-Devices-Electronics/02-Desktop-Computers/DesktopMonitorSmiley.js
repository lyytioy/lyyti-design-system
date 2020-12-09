import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitorSmiley = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-monitor-smiley_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="desktop-monitor-smiley_svg__a"
      d="M15.75 23.25h-7.5l.75-4.5h6l.75 4.5zM6 23.25h12M.75 15.75h22.5"
    />,
    <rect
      className="desktop-monitor-smiley_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={18}
      rx={3}
      ry={3}
    />,
    <path
      className="desktop-monitor-smiley_svg__a"
      d="M8.128 10.5a5.747 5.747 0 007.744 0M9 5.25v1.5M15 5.25v1.5"
    />
  );

export default SvgDesktopMonitorSmiley;
