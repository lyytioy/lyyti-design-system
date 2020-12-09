import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-player_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-actions-player_svg__cls-1"
      d="M.75 17.25A6.75 6.75 0 017.5 10.5a6.9 6.9 0 01.75.041M3.376 4.986v1a5.912 5.912 0 01-.859 3.272M11.623 4.986v1a5.9 5.9 0 00.86 3.272M3.387 5.2A5.485 5.485 0 007.5 3.305a5.481 5.481 0 004.112 1.9"
    />,
    <circle
      className="single-woman-actions-player_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <rect
      className="single-woman-actions-player_svg__cls-1"
      x={11.25}
      y={11.25}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-woman-actions-player_svg__cls-1"
      d="M15.75 17.25v-1.82a.43.43 0 01.651-.369l3.033 1.82a.429.429 0 010 .737l-3.034 1.82a.429.429 0 01-.651-.368z"
    />
  );

export default SvgSingleWomanActionsPlayer;
