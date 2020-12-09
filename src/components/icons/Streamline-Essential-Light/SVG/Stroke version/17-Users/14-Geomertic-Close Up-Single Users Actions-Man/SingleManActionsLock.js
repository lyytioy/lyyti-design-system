import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-lock_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="single-man-actions-lock_svg__cls-1"
      x={14.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <path
      className="single-man-actions-lock_svg__cls-1"
      d="M19 11.5a3 3 0 00-3 3v1h6v-1a3 3 0 00-3-3z"
    />,
    <circle
      className="single-man-actions-lock_svg__cls-1"
      cx={19}
      cy={19.563}
      r={1.25}
    />,
    <path
      className="single-man-actions-lock_svg__cls-1"
      d="M11.5 17.5H.5a7 7 0 0112.745-4M3.838 2.592A7.053 7.053 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-lock_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsLock;
