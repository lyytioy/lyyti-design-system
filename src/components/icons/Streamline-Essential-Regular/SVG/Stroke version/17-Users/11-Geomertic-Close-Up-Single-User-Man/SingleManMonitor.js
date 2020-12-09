import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-monitor_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="single-man-monitor_svg__cls-1"
      x={1.5}
      y={2.25}
      width={21}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-man-monitor_svg__cls-1"
      d="M12 18.75v3M4.5 21.75h15"
    />,
    <circle
      className="single-man-monitor_svg__cls-1"
      cx={12.137}
      cy={8.625}
      r={3.375}
    />,
    <path
      className="single-man-monitor_svg__cls-1"
      d="M16.887 15.749a6.027 6.027 0 00-9.5 0M15.512 8.736a6.76 6.76 0 01-6.443-1.517"
    />
  );

export default SvgSingleManMonitor;
