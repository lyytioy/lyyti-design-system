import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFilePlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-file-play_svg__a"
      d="M21.207 4.5a1 1 0 01.293.707V22.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293z"
    />,
    <path
      className="video-file-play_svg__a"
      d="M9.986 8.126A1 1 0 008.5 9v7.5a1 1 0 001.486.874l6.5-4a1 1 0 000-1.748z"
    />
  );

export default SvgVideoFilePlay;
