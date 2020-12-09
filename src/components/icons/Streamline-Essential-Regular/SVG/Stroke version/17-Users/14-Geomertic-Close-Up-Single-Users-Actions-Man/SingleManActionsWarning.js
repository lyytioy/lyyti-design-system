import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-warning_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-warning_svg__cls-1"
      d="M3.945 2.781a6.846 6.846 0 004.93 2.094 6.847 6.847 0 002.712-.558"
    />,
    <circle
      className="single-man-actions-warning_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="single-man-actions-warning_svg__cls-1"
      d="M17.25 20.25a.375.375 0 10.375.375.374.374 0 00-.375-.375M17.25 18v-3"
    />,
    <path
      className="single-man-actions-warning_svg__cls-1"
      d="M23.062 20.682a1.774 1.774 0 01-1.587 2.568h-8.451a1.774 1.774 0 01-1.587-2.568l4.226-8.452a1.774 1.774 0 013.173 0zM12.21 12.425A6.743 6.743 0 00.75 17.25"
    />
  );

export default SvgSingleManActionsWarning;
