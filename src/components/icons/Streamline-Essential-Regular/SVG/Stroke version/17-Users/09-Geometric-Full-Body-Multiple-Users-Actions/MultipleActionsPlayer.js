import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-player_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="multiple-actions-player_svg__cls-1"
      x={11.25}
      y={11.25}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="multiple-actions-player_svg__cls-1"
      d="M15.75 17.25v-1.82a.431.431 0 01.652-.369l3.033 1.82a.429.429 0 010 .737l-3.035 1.82a.43.43 0 01-.652-.368z"
    />,
    <circle
      className="multiple-actions-player_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="multiple-actions-player_svg__cls-1"
      d="M9.174 9.317A5.251 5.251 0 00.75 13.5v2.25H3l.75 7.5h4.5l.45-4.537"
    />,
    <circle
      className="multiple-actions-player_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-player_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71"
    />
  );

export default SvgMultipleActionsPlayer;
