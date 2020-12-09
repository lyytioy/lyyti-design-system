import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsView = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-view_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-view_svg__cls-1"
      d="M.75 17.25a6.756 6.756 0 018.636-6.483M3.945 2.781a6.848 6.848 0 004.93 2.094 6.847 6.847 0 002.712-.558"
    />,
    <circle
      className="single-man-actions-view_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <circle
      className="single-man-actions-view_svg__cls-1"
      cx={15.75}
      cy={15.75}
      r={5.25}
    />,
    <path
      className="single-man-actions-view_svg__cls-1"
      d="M23.25 23.25l-3.788-3.788"
    />
  );

export default SvgSingleManActionsView;
