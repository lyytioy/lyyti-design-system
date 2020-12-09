import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-refresh_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-actions-refresh_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-actions-refresh_svg__cls-1"
      d="M10.555 10.888A5.251 5.251 0 00.75 13.5v2.25H3l.75 7.5h4.5M15 18.75h-3.75v3.75M22.667 19.483a5.572 5.572 0 01-10.74-.733M19.5 15.75h3.75V12M11.832 15.017a5.572 5.572 0 0110.74.733M6 8.25v6"
    />
  );

export default SvgSingleManActionsRefresh;
