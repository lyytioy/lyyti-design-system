import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-monitor_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-monitor_svg__cls-1"
      d="M9.753 9.78a6.093 6.093 0 00-3-.78 6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-monitor_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-monitor_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-monitor_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.284-.71"
    />,
    <rect
      className="multiple-actions-monitor_svg__cls-1"
      x={11.25}
      y={11.25}
      width={12}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="multiple-actions-monitor_svg__cls-1"
      d="M14.25 23.25h6M17.25 23.25v-3"
    />
  );

export default SvgMultipleActionsMonitor;
