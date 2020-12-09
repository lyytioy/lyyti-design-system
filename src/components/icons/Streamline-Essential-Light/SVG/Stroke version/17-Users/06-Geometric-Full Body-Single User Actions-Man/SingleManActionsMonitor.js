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
      d="M2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle
      className="single-man-actions-monitor_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-man-actions-monitor_svg__cls-1"
      d="M9.5 11a5 5 0 00-9 3v3.5H3l.5 6h4l.5-6h1.482"
    />
  );

export default SvgSingleManActionsMonitor;
