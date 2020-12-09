import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-monitor_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-monitor_svg__cls-1"
      d="M14.5 23.5h6M17.5 23.5v-3"
    />,
    <rect
      className="single-man-actions-monitor_svg__cls-1"
      x={11.5}
      y={11.5}
      width={12}
      height={9}
      rx={1}
      ry={1}
    />,
    <path
      className="single-man-actions-monitor_svg__cls-1"
      d="M8.5 10.571a7.005 7.005 0 00-8 6.929h8M3.838 2.592A7.053 7.053 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-monitor_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsMonitor;
