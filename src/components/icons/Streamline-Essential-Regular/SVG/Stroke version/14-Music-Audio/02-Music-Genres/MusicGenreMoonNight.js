import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreMoonNight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-moon-night_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="music-genre-moon-night_svg__a"
      cx={21.75}
      cy={16.004}
      r={1.5}
    />,
    <path
      className="music-genre-moon-night_svg__a"
      d="M23.25 16.004v-4.5M8.655 13.389A10.269 10.269 0 0111.547 3.35a.489.489 0 00-.326-.844 10.271 10.271 0 104.951 19.16.489.489 0 00-.123-.9 10.268 10.268 0 01-7.394-7.377z"
    />,
    <circle
      className="music-genre-moon-night_svg__a"
      cx={16.125}
      cy={8.129}
      r={1.875}
    />,
    <path
      className="music-genre-moon-night_svg__a"
      d="M18 8.129V1.7a.75.75 0 011.2-.6L21 2.451"
    />
  );

export default SvgMusicGenreMoonNight;
