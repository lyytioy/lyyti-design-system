import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreSmoke = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-smoke_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="music-genre-smoke_svg__a"
      d="M15 21.2a8.495 8.495 0 114.5-3.954M3.5 16.747h-1a2 2 0 01-2-2v-3a2 2 0 012-2h1z"
    />,
    <path
      className="music-genre-smoke_svg__a"
      d="M20.5 16.747h1a2 2 0 002-2v-3a2 2 0 00-2-2h-1zM21.487 9.747a9.5 9.5 0 00-18.974 0M7.417 15.747a5 5 0 009.166 0M7.5 11.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M16.5 11.5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="music-genre-smoke_svg__a"
      d="M14.369 18.15l4.841 4.812a1 1 0 001.486-.085l.63-.787a1 1 0 00-.218-1.451l-5.321-3.629"
    />
  );

export default SvgMusicGenreSmoke;
