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
    <path
      className="multiple-actions-player_svg__cls-1"
      d="M9.749 9.778A6.1 6.1 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-player_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
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
    />,
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
      d="M15.75 17.25v-1.82a.43.43 0 01.651-.369l3.034 1.82a.431.431 0 010 .738l-3.035 1.82a.43.43 0 01-.651-.369z"
    />
  );

export default SvgMultipleActionsPlayer;
