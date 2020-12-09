import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiMonitor1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-monitor-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-monitor-1_svg__a"
      d="M13.431 19.5a7.233 7.233 0 001.191 3.614l.24.386M9.138 23.5l.24-.386a7.233 7.233 0 001.191-3.614M7.4 23.5h9.2M1.5 16.5h21"
    />,
    <path
      className="wifi-monitor-1_svg__a"
      d="M19.5 5h2a1 1 0 011 1v12.5a1 1 0 01-1 1h-19a1 1 0 01-1-1V6a1 1 0 011-1h2"
    />,
    <circle className="wifi-monitor-1_svg__a" cx={12} cy={9.75} r={1.25} />,
    <path
      className="wifi-monitor-1_svg__a"
      d="M18 3.123a9.542 9.542 0 00-12 0M8.5 6.238a5.566 5.566 0 017 0"
    />
  );

export default SvgWifiMonitor1;
