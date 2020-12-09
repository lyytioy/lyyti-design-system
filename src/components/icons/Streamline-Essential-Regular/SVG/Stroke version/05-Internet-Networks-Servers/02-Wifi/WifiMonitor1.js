import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiMonitor1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-monitor-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="wifi-monitor-1_svg__a"
      x={3.75}
      y={8.25}
      width={16.5}
      height={10.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="wifi-monitor-1_svg__a"
      d="M15 23.25H9l.75-4.5h4.5l.75 4.5zM6.75 23.25h10.5M9.348 4.886a3.752 3.752 0 015.3 0M7.227 2.727a6.75 6.75 0 019.546 0"
    />
  );

export default SvgWifiMonitor1;
