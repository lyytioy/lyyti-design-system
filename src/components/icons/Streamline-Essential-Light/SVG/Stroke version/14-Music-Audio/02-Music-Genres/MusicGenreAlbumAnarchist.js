import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreAlbumAnarchist = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-album-anarchist_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="music-genre-album-anarchist_svg__a"
      x={0.5}
      y={3.5}
      width={17}
      height={17}
      rx={1}
      ry={1}
    />,
    <path
      className="music-genre-album-anarchist_svg__a"
      d="M17.5 19.35a7.5 7.5 0 000-14.7"
    />,
    <circle
      className="music-genre-album-anarchist_svg__a"
      cx={9}
      cy={12}
      r={5.5}
    />,
    <path
      className="music-genre-album-anarchist_svg__a"
      d="M11.5 5.5L3.5 17M9.5 5.5l3 13M2.5 12.5l13 2"
    />
  );

export default SvgMusicGenreAlbumAnarchist;
