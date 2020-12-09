import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-lock_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-actions-lock_svg__cls-1"
      d="M3.376 4.986v1a5.912 5.912 0 01-.859 3.272M11.623 4.986v1a5.9 5.9 0 00.86 3.272M3.387 5.2A5.485 5.485 0 007.5 3.305a5.481 5.481 0 004.112 1.9"
    />,
    <circle
      className="single-woman-actions-lock_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="single-woman-actions-lock_svg__cls-1"
      d="M.75 17.25a6.75 6.75 0 0111.78-4.5"
    />,
    <rect
      className="single-woman-actions-lock_svg__cls-1"
      x={14.25}
      y={15.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-woman-actions-lock_svg__cls-1"
      d="M18.75 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 19.154a.375.375 0 10.375.375.374.374 0 00-.375-.375"
    />
  );

export default SvgSingleWomanActionsLock;
