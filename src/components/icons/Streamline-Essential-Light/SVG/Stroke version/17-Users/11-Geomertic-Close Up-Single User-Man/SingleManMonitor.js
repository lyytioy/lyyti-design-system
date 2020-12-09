import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-monitor_svg__cls-2{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      d="M17 15.5a5.321 5.321 0 00-10 0"
      strokeWidth={0.989}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      className="single-man-monitor_svg__cls-2"
      d="M9.143 5.6a5.4 5.4 0 006.021 1.21"
    />,
    <circle
      className="single-man-monitor_svg__cls-2"
      cx={11.944}
      cy={7.253}
      r={3.25}
    />,
    <rect
      className="single-man-monitor_svg__cls-2"
      x={1}
      y={2}
      width={22}
      height={16}
      rx={1}
      ry={1}
    />,
    <path className="single-man-monitor_svg__cls-2" d="M12 18v4M4.5 22h15" />
  );

export default SvgSingleManMonitor;
