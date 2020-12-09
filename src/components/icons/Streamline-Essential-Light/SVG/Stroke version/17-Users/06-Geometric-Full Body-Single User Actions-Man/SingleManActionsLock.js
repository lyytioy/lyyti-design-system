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
      d="M2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle
      className="single-man-actions-lock_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-man-actions-lock_svg__cls-1"
      d="M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />
  );

export default SvgSingleManActionsLock;
