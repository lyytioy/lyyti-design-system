import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsFlag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-flag_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-actions-flag_svg__cls-1"
      d="M3.376 4.986v1a5.912 5.912 0 01-.859 3.272M11.623 4.986v1a5.9 5.9 0 00.86 3.272M3.387 5.2A5.485 5.485 0 007.5 3.305a5.481 5.481 0 004.112 1.9"
    />,
    <circle
      className="single-woman-actions-flag_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="single-woman-actions-flag_svg__cls-1"
      d="M11.25 11.639A6.748 6.748 0 00.75 17.25M14.25 12.75h9v6h-9zM14.25 12.75v10.5"
    />
  );

export default SvgSingleWomanActionsFlag;