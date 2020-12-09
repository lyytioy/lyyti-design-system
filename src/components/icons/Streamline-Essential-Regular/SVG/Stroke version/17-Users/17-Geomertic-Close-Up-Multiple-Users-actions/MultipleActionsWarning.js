import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-warning_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-warning_svg__cls-1"
      d="M17.25 20.25a.375.375 0 10.375.375.374.374 0 00-.375-.375M17.25 18v-3"
    />,
    <path
      className="multiple-actions-warning_svg__cls-1"
      d="M23.062 20.682a1.774 1.774 0 01-1.587 2.568h-8.451a1.774 1.774 0 01-1.587-2.568l4.226-8.452a1.774 1.774 0 013.173 0zM11.6 11.4A6.029 6.029 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-warning_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-warning_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-warning_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71"
    />
  );

export default SvgMultipleActionsWarning;
