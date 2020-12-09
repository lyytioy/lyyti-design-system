import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-refresh_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-refresh_svg__cls-1"
      d="M15 18.75h-3.75v3.75M22.667 19.483a5.572 5.572 0 01-10.74-.733M19.5 15.75h3.75V12M11.832 15.017a5.572 5.572 0 0110.74.733M10.781 10.513A6.048 6.048 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-refresh_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-refresh_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-refresh_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.284-.71"
    />
  );

export default SvgMultipleActionsRefresh;
