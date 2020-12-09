import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-player_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="multiple-actions-player_svg__cls-1"
      x={13.5}
      y={13.5}
      width={10}
      height={10}
      rx={1}
      ry={1}
    />,
    <rect
      className="multiple-actions-player_svg__cls-1"
      x={13.5}
      y={13.5}
      width={10}
      height={10}
      rx={1}
      ry={1}
    />,
    <path
      className="multiple-actions-player_svg__cls-1"
      d="M16.5 18.5v-1.517a.359.359 0 01.543-.307l3.283 1.517a.358.358 0 010 .614l-3.283 1.517a.359.359 0 01-.543-.307zM10.5 15.5H.5a6 6 0 0110.472-4"
    />,
    <circle
      className="multiple-actions-player_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-player_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-player_svg__cls-1"
      d="M20.477 11.505a6 6 0 00-7.46-1.212"
    />
  );

export default SvgMultipleActionsPlayer;
