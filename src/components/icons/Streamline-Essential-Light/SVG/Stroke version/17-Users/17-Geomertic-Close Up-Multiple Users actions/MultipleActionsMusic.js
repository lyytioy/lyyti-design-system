import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-music_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-music_svg__cls-1"
      cx={22}
      cy={21}
      r={1.5}
    />,
    <circle
      className="multiple-actions-music_svg__cls-1"
      cx={15}
      cy={22}
      r={1.5}
    />,
    <path
      className="multiple-actions-music_svg__cls-1"
      d="M16.5 22v-5.746a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962V21M.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-music_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-music_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-music_svg__cls-1"
      d="M20.877 12a6 6 0 00-7.837-1.72"
    />
  );

export default SvgMultipleActionsMusic;
