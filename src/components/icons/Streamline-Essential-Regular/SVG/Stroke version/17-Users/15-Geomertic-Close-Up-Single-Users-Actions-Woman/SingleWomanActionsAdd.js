import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-add_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-actions-add_svg__cls-1"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="single-woman-actions-add_svg__cls-1"
      d="M17.25 14.25v6M14.25 17.25h6M3.376 4.986v1a5.9 5.9 0 01-.859 3.272M11.623 4.986v1a5.9 5.9 0 00.86 3.272M3.388 5.2A5.483 5.483 0 007.5 3.305a5.483 5.483 0 004.112 1.9"
    />,
    <circle
      className="single-woman-actions-add_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="single-woman-actions-add_svg__cls-1"
      d="M.75 17.25a6.753 6.753 0 019.4-6.208"
    />
  );

export default SvgSingleWomanActionsAdd;
