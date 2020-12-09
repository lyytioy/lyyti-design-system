import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreBurn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-burn_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="music-genre-burn_svg__a"
      d="M19.568 17.21a9.453 9.453 0 00.188-11.06l-2.7 2.961A12.009 12.009 0 0117.38.75 12.055 12.055 0 007.4 7.03L5.25 4.937a9.451 9.451 0 00-1.062 11.932"
    />,
    <circle
      className="music-genre-burn_svg__a"
      cx={6.825}
      cy={21.375}
      r={1.875}
    />,
    <circle
      className="music-genre-burn_svg__a"
      cx={14.325}
      cy={19.125}
      r={1.875}
    />,
    <path
      className="music-genre-burn_svg__a"
      d="M8.7 21.375v-6.794a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423v5.794"
    />
  );

export default SvgMusicGenreBurn;
