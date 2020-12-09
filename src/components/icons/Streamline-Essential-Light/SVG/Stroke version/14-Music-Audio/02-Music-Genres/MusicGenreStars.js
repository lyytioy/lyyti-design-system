import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreStars = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-stars_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="music-genre-stars_svg__a" cx={7} cy={20.75} r={2} />,
    <circle className="music-genre-stars_svg__a" cx={15} cy={18.75} r={2} />,
    <path
      className="music-genre-stars_svg__a"
      d="M17 18.75v-6.795a1 1 0 00-1.184-.983l-6 1.125A1 1 0 009 13.08v7.67M20.5 6.75a2.231 2.231 0 002.5 2.5c-1.615-.006-2.418.86-2.5 2.5a2.211 2.211 0 00-2.5-2.5 2.232 2.232 0 002.5-2.5zM15.5 1.75a2.231 2.231 0 002.5 2.5c-1.615-.006-2.418.86-2.5 2.5a2.211 2.211 0 00-2.5-2.5 2.232 2.232 0 002.5-2.5zM5.5.75c-.011 2.827 1.368 4.433 4.5 4.5-2.907-.011-4.352 1.55-4.5 4.5-.025-2.784-1.273-4.5-4.5-4.5 2.888-.041 4.489-1.434 4.5-4.5z"
    />
  );

export default SvgMusicGenreStars;
