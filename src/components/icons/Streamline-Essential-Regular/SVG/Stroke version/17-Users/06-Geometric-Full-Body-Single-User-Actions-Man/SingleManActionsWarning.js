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
      d="M17.25 20.25a.375.375 0 10.375.375.374.374 0 00-.375-.375M17.25 18v-3"
    />,
    <path
      className="single-man-actions-warning_svg__cls-1"
      d="M23.062 20.682a1.774 1.774 0 01-1.587 2.568h-8.451a1.774 1.774 0 01-1.587-2.568l4.226-8.452a1.774 1.774 0 013.173 0z"
    />,
    <circle
      className="single-man-actions-warning_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-actions-warning_svg__cls-1"
      d="M11.25 14.25v-.75a5.25 5.25 0 00-10.5 0v2.25H3l.75 7.5h4.5l.386-3.862M6 8.25v6"
    />
  );

export default SvgSingleManActionsWarning;
