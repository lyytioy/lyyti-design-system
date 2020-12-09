import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-player_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="single-woman-actions-player_svg__cls-1"
      x={11.5}
      y={11.5}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-woman-actions-player_svg__cls-1"
      d="M15.5 17.5v-1.82a.43.43 0 01.651-.369l3.034 1.82a.43.43 0 010 .738l-3.034 1.82a.43.43 0 01-.651-.369zM12.6 9.1a5.518 5.518 0 01-.8-3.054V4.8a4.3 4.3 0 10-8.6 0v1.246A5.518 5.518 0 012.4 9.1"
    />,
    <path
      className="single-woman-actions-player_svg__cls-1"
      d="M3.2 5.506a5.691 5.691 0 004.3-1.969 5.687 5.687 0 004.3 1.969M11.287 5.483a3.791 3.791 0 01-7.573 0M8.5 10.571a7.005 7.005 0 00-8 6.929h8"
    />
  );

export default SvgSingleWomanActionsPlayer;
