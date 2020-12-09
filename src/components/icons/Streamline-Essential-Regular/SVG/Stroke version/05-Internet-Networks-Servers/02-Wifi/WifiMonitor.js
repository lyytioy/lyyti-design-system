import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-monitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wifi-monitor_svg__a"
      d="M15 21.75H9l.75-4.5h4.5l.75 4.5zM6.75 21.75h10.5M12 13.125a.375.375 0 10.375.375.375.375 0 00-.375-.375M8.715 10.355a6.006 6.006 0 016.57 0M17.108 7.985a8.982 8.982 0 00-10.216 0"
    />,
    <rect
      className="wifi-monitor_svg__a"
      x={0.75}
      y={2.25}
      width={22.5}
      height={15}
      rx={3}
      ry={3}
    />
  );

export default SvgWifiMonitor;
