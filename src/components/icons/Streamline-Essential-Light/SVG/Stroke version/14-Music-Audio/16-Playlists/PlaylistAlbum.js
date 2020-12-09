import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistAlbum = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-album_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="playlist-album_svg__a"
      x={0.5}
      y={0.5}
      width={20}
      height={20}
      rx={1}
      ry={1}
    />,
    <path
      className="playlist-album_svg__a"
      d="M3.5 22.5a1 1 0 001 1h18a1 1 0 001-1v-18a1 1 0 00-1-1"
    />,
    <circle className="playlist-album_svg__a" cx={13} cy={13} r={1.5} />,
    <circle className="playlist-album_svg__a" cx={6} cy={14} r={1.5} />,
    <path
      className="playlist-album_svg__a"
      d="M7.5 14V8.254a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962V13"
    />
  );

export default SvgPlaylistAlbum;
