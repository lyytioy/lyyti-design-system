import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerSubtitle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-subtitle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-player-subtitle_svg__a"
      d="M10.305 10.852a.54.54 0 01-.807-.468V3.616a.54.54 0 01.807-.468l5.921 3.384a.539.539 0 010 .936z"
    />,
    <path
      className="video-player-subtitle_svg__a"
      d="M23.5 17.5a2 2 0 01-2 2h-10l-4 4v-4h-5a2 2 0 01-2-2v-15a2 2 0 012-2h19a2 2 0 012 2zM3.5 16.5h17M.5 13.5h23M9.5 15.5v2"
    />
  );

export default SvgVideoPlayerSubtitle;
