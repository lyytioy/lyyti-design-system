import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-music_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-actions-music_svg__cls-1"
      cx={13.875}
      cy={21.375}
      r={1.875}
    />,
    <circle
      className="single-man-actions-music_svg__cls-1"
      cx={21.375}
      cy={19.125}
      r={1.875}
    />,
    <path
      className="single-man-actions-music_svg__cls-1"
      d="M15.75 21.375v-6.794a1.5 1.5 0 011.025-1.423l4.5-1.25a1.5 1.5 0 011.975 1.423v5.794"
    />,
    <circle
      className="single-man-actions-music_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-actions-music_svg__cls-1"
      d="M11.25 13.5a5.25 5.25 0 00-10.5 0v2.25H3l.75 7.5h4.5l.75-7.5h2.25zM6 8.25v6"
    />
  );

export default SvgSingleManActionsMusic;
