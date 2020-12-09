import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenrePacman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-pacman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="music-genre-pacman_svg__a"
      cx={17.25}
      cy={14.862}
      r={1.25}
    />,
    <circle
      className="music-genre-pacman_svg__a"
      cx={22.25}
      cy={13.362}
      r={1.25}
    />,
    <path
      className="music-genre-pacman_svg__a"
      d="M18.5 14.862v-4.53a1 1 0 01.684-.948l3-.834a1 1 0 011.316.95v3.863"
    />,
    <circle
      className="music-genre-pacman_svg__a"
      cx={14.251}
      cy={6.395}
      r={1.25}
    />,
    <path
      className="music-genre-pacman_svg__a"
      d="M15.5 6.4V1.865a1 1 0 01.684-.948L17.685.5M10.77 10.2a1 1 0 00-.614-1.39 7.5 7.5 0 104.037 11.419 1 1 0 00-.4-1.466L8 16z"
    />,
    <path
      className="music-genre-pacman_svg__a"
      d="M5 12.748a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgMusicGenrePacman;
