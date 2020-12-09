import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-warning_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-actions-warning_svg__cls-1"
      d="M17.25 20.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.25 18v-3"
    />,
    <path
      className="single-woman-actions-warning_svg__cls-1"
      d="M23.063 20.682a1.774 1.774 0 01-1.587 2.568h-8.452a1.774 1.774 0 01-1.587-2.568l4.226-8.451a1.774 1.774 0 013.174 0z"
    />,
    <circle
      className="single-woman-actions-warning_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-actions-warning_svg__cls-1"
      d="M10.567 10.91a5.286 5.286 0 00-1.681-1.8L6 13.5 3.114 9.114A5.246 5.246 0 00.75 13.5v2.25H3l.75 7.5h4.5l.357-3.574M3 3.75S3 7.5.75 7.5M9 3.75S9 7.5 11.25 7.5"
    />
  );

export default SvgSingleWomanActionsWarning;
