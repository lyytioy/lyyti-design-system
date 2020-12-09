import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerAlbum = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-album_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="video-player-album_svg__a"
      x={0.75}
      y={2.25}
      width={17.25}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="video-player-album_svg__a"
      d="M18 4.312a8.254 8.254 0 010 15.376M6.863 15.66a.856.856 0 01-1.238-.766V9.106a.856.856 0 011.238-.766l5.789 2.895a.855.855 0 010 1.53z"
    />
  );

export default SvgVideoPlayerAlbum;
