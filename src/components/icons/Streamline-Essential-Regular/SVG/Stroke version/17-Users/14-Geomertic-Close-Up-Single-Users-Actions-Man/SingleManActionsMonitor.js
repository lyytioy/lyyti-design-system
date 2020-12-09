import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-monitor_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-monitor_svg__cls-1"
      d="M.75 17.25A6.75 6.75 0 017.5 10.5a6.9 6.9 0 01.75.041M3.945 2.781a6.848 6.848 0 004.93 2.094 6.847 6.847 0 002.712-.558"
    />,
    <circle
      className="single-man-actions-monitor_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <rect
      className="single-man-actions-monitor_svg__cls-1"
      x={11.25}
      y={11.25}
      width={12}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-man-actions-monitor_svg__cls-1"
      d="M14.25 23.25h6M17.25 23.25v-3"
    />
  );

export default SvgSingleManActionsMonitor;
