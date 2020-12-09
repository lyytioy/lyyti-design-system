import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerSubtitle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-subtitle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-player-subtitle_svg__a"
      d="M21.75 18.75h-10.5l-6 4.5v-4.5h-3a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5z"
    />,
    <path
      className="video-player-subtitle_svg__a"
      d="M9.778 10.439a.575.575 0 01-.519 0 .457.457 0 01-.259-.4V4.214a.457.457 0 01.259-.4.575.575 0 01.519 0l5.71 2.911a.441.441 0 010 .806zM3.75 14.25h16.5M6.75 12.75v3"
    />
  );

export default SvgVideoPlayerSubtitle;
