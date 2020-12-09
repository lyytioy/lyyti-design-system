import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreSmoke = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-smoke_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="music-genre-smoke_svg__a"
      d="M7.875 11.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M16.125 11.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M14.1 17.564l5.369 5.4a.979.979 0 001.453-.083l.617-.77a.98.98 0 00-.213-1.42l-5.735-4.111"
    />,
    <path
      className="music-genre-smoke_svg__a"
      d="M13.5 20.864a8.251 8.251 0 116.75-8.114 8.217 8.217 0 01-.9 3.75M7.256 15a5.251 5.251 0 009.488 0M3 9.75a9 9 0 0118 0"
    />,
    <path
      className="music-genre-smoke_svg__a"
      d="M2.25 15.75h1.5v-6h-1.5a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5zM21.75 15.75h-1.5v-6h1.5a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5z"
    />
  );

export default SvgMusicGenreSmoke;
