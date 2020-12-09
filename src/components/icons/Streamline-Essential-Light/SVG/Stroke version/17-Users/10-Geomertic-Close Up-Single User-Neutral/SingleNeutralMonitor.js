import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-monitor_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <g id="single-neutral-monitor_svg___Group_" data-name="&lt;Group&gt;">
      <g id="single-neutral-monitor_svg__New_Symbol_1" data-name="New Symbol 1">
        <circle
          className="single-neutral-monitor_svg__cls-1"
          cx={11.938}
          cy={7.25}
          r={3.25}
        />
        <path
          d="M16.994 15.5a5.321 5.321 0 00-10 0"
          strokeWidth={0.989}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>,
    <rect
      className="single-neutral-monitor_svg__cls-1"
      x={1}
      y={2}
      width={22}
      height={16}
      rx={1}
      ry={1}
    />,
    <path
      className="single-neutral-monitor_svg__cls-1"
      d="M12 18v4M4.5 22h15"
    />
  );

export default SvgSingleNeutralMonitor;
