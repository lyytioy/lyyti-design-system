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
    <rect
      className="single-woman-actions-lock_svg__cls-1"
      x={14.25}
      y={15.721}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-woman-actions-lock_svg__cls-1"
      d="M18.75 11.221a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 19.125a.375.375 0 10.375.375.374.374 0 00-.375-.375"
    />,
    <circle
      className="single-woman-actions-lock_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-actions-lock_svg__cls-1"
      d="M8.25 23.25l.75-7.5h2.25V13.5a5.244 5.244 0 00-2.365-4.386L6 13.5 3.114 9.114A5.246 5.246 0 00.75 13.5v2.25H3l.75 7.5zM3 3.75S3 7.5.75 7.5M9 3.75S9 7.5 11.25 7.5"
    />
  );

export default SvgSingleWomanActionsLock;
