import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-monitor_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="single-woman-monitor_svg__cls-1"
      x={1.5}
      y={2.25}
      width={21}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-woman-monitor_svg__cls-1"
      d="M12 18.75v3M4.5 21.75h15M16.224 15.75a4.513 4.513 0 00-2.383-2.591L12 15.75l-1.841-2.591a4.518 4.518 0 00-2.384 2.591"
    />,
    <circle
      className="single-woman-monitor_svg__cls-1"
      cx={12}
      cy={8.25}
      r={3}
    />,
    <path
      className="single-woman-monitor_svg__cls-1"
      d="M9 8.25S9 12 6.75 12M15 8.25S15 12 17.25 12"
    />
  );

export default SvgSingleWomanMonitor;
