import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-player_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-actions-player_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-neutral-actions-player_svg__cls-1"
      d="M9 10.43A5 5 0 00.5 14v3.5H3l.5 6h4l.5-6h1"
    />,
    <rect
      className="single-neutral-actions-player_svg__cls-1"
      x={11.5}
      y={11.5}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-neutral-actions-player_svg__cls-1"
      d="M15.5 17.5v-1.82a.43.43 0 01.651-.369l3.034 1.82a.43.43 0 010 .738l-3.034 1.82a.43.43 0 01-.651-.369z"
    />
  );

export default SvgSingleNeutralActionsPlayer;
