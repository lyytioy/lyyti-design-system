import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-music_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-music_svg__cls-1"
      d="M10.782 10.513A6.052 6.052 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-music_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-music_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-music_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71"
    />,
    <circle
      className="multiple-actions-music_svg__cls-1"
      cx={13.875}
      cy={21.375}
      r={1.875}
    />,
    <circle
      className="multiple-actions-music_svg__cls-1"
      cx={21.375}
      cy={19.125}
      r={1.875}
    />,
    <path
      className="multiple-actions-music_svg__cls-1"
      d="M15.75 21.375v-6.794a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423v5.794"
    />
  );

export default SvgMultipleActionsMusic;
