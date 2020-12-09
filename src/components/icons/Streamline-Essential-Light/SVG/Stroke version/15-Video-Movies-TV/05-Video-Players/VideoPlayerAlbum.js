import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerAlbum = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-album_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-player-album_svg__a"
      d="M15.5 4a8 8 0 010 16M15.5 10a2 2 0 010 4"
    />,
    <rect
      className="video-player-album_svg__a"
      x={0.5}
      y={3}
      width={15}
      height={18}
      rx={1}
      ry={1}
    />,
    <path
      className="video-player-album_svg__a"
      d="M10.044 11.8a.773.773 0 010 1.41l-3.86 1.737a.485.485 0 01-.684-.442v-4a.485.485 0 01.684-.442z"
    />
  );

export default SvgVideoPlayerAlbum;
