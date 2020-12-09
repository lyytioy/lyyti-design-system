import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerAdjustFinger = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-adjust-finger_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-player-adjust-finger_svg__a"
      d="M22.5 23.5v-2.668a3.333 3.333 0 00-3.333-3.332H17.5V13a1.5 1.5 0 00-3 0v7l-1.289-1.08a1.25 1.25 0 10-1.922 1.6l2.479 2.98"
    />,
    <path
      className="video-player-adjust-finger_svg__a"
      d="M9 18.5H2a1.546 1.546 0 01-1.5-1.589V2.089A1.546 1.546 0 012 .5h20a1.546 1.546 0 011.5 1.589v14.822M19.5 14.5h1M3.5 14.5h9M5.5 13.5v2"
    />,
    <path
      className="video-player-adjust-finger_svg__a"
      d="M8 7.125v-2.73a.645.645 0 01.977-.553l5.91 2.73a.645.645 0 010 1.106l-5.91 2.73A.645.645 0 018 9.855z"
    />
  );

export default SvgVideoPlayerAdjustFinger;
