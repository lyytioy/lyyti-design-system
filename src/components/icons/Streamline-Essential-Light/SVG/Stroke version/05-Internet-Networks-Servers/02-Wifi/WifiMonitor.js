import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-monitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-monitor_svg__a"
      d="M23.5 17.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-14a1 1 0 011-1h21a1 1 0 011 1zM7 21.5h10M10.5 18.5v3M13.5 18.5v3"
    />,
    <circle className="wifi-monitor_svg__a" cx={12} cy={14} r={1.5} />,
    <path
      className="wifi-monitor_svg__a"
      d="M15.326 10.619a5.5 5.5 0 00-6.652 0M18 7.5a10 10 0 00-12 0"
    />
  );

export default SvgWifiMonitor;
