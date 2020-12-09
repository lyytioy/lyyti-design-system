import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerPlaying = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-playing_svg__b{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      cx={12}
      cy={12}
      r={11.5}
      strokeDasharray="7.505 2.814"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <circle className="video-player-playing_svg__b" cx={12} cy={12} r={7.5} />,
    <path
      className="video-player-playing_svg__b"
      d="M9.94 8.738A.274.274 0 009.5 9v6a.274.274 0 00.44.262l5.589-3.024c.242-.131.242-.345 0-.476z"
    />
  );

export default SvgVideoPlayerPlaying;
