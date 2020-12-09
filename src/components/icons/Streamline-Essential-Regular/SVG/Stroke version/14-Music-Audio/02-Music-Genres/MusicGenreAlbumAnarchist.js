import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreAlbumAnarchist = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-album-anarchist_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="music-genre-album-anarchist_svg__a"
      x={0.75}
      y={3.75}
      width={16.5}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="music-genre-album-anarchist_svg__a"
      d="M17.125 19.35A7.614 7.614 0 0023.25 12a7.614 7.614 0 00-6.125-7.35"
    />,
    <circle
      className="music-genre-album-anarchist_svg__a"
      cx={9}
      cy={12}
      r={5.25}
    />,
    <path
      className="music-genre-album-anarchist_svg__a"
      d="M4.5 15.75l7.127-9.503M12 17.25L9.562 5.871M3.75 12l10.04 2.151"
    />
  );

export default SvgMusicGenreAlbumAnarchist;
