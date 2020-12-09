import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreBurn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-burn_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="music-genre-burn_svg__a" cx={6.5} cy={21.335} r={2} />,
    <circle className="music-genre-burn_svg__a" cx={14.5} cy={19.335} r={2} />,
    <path
      className="music-genre-burn_svg__a"
      d="M16.5 19.335v-6.8a1 1 0 00-1.184-.983l-6 1.125a1 1 0 00-.816.983v7.67"
    />,
    <path
      className="music-genre-burn_svg__a"
      d="M19 14.115A4.983 4.983 0 0021.5 9.7a6.928 6.928 0 00-1.483-4.2.5.5 0 00-.844.089 2.394 2.394 0 01-2.556 1.321 5.362 5.362 0 01-1.686-5.6.5.5 0 00-.513-.647 7.059 7.059 0 00-6.869 6.251 2.627 2.627 0 01-2.574-1.4.5.5 0 00-.375-.27.5.5 0 00-.438.16c-2.487 2.762-2.35 7.488 1.59 9.319"
    />
  );

export default SvgMusicGenreBurn;
