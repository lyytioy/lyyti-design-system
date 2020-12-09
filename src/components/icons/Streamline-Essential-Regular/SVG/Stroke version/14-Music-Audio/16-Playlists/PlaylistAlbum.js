import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistAlbum = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-album_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="playlist-album_svg__a"
      x={0.75}
      y={1.5}
      width={19.5}
      height={18}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="playlist-album_svg__a"
      d="M5.25 22.5h16.5a1.5 1.5 0 001.5-1.5V5.8"
    />,
    <circle
      className="playlist-album_svg__a"
      cx={6.375}
      cy={13.875}
      r={1.875}
    />,
    <circle
      className="playlist-album_svg__a"
      cx={13.875}
      cy={11.625}
      r={1.875}
    />,
    <path
      className="playlist-album_svg__a"
      d="M8.25 13.875V7.25a1.5 1.5 0 011.026-1.423l4.5-1.25A1.5 1.5 0 0115.75 6v5.625"
    />
  );

export default SvgPlaylistAlbum;
