import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenrePacman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-pacman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="music-genre-pacman_svg__a"
      d="M11.513 10.244a.98.98 0 00-.6-1.36 7.337 7.337 0 103.949 11.17.979.979 0 00-.387-1.435l-5.669-2.707z"
    />,
    <path
      className="music-genre-pacman_svg__a"
      d="M5.872 12.6a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <circle
      className="music-genre-pacman_svg__a"
      cx={21.032}
      cy={16.5}
      r={1.5}
    />,
    <path className="music-genre-pacman_svg__a" d="M22.532 16.5V12" />,
    <circle
      className="music-genre-pacman_svg__a"
      cx={17.657}
      cy={7.929}
      r={1.875}
    />,
    <path
      className="music-genre-pacman_svg__a"
      d="M19.532 7.929V1.5a.75.75 0 011.2-.6l1.8 1.35"
    />
  );

export default SvgMusicGenrePacman;
