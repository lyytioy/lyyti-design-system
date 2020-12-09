import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-player_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="single-neutral-actions-player_svg__cls-1"
      x={11.25}
      y={11.25}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-neutral-actions-player_svg__cls-1"
      d="M15.75 17.25v-1.82a.43.43 0 01.651-.369l3.033 1.82a.429.429 0 010 .737l-3.034 1.82a.429.429 0 01-.651-.368z"
    />,
    <circle
      className="single-neutral-actions-player_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-actions-player_svg__cls-1"
      d="M9.75 9.826a5.25 5.25 0 00-9 3.674v2.25H3l.75 7.5h4.5l.323-3.233"
    />
  );

export default SvgSingleNeutralActionsPlayer;
