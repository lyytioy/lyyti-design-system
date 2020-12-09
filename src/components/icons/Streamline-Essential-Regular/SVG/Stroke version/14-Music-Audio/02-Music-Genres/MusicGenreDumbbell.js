import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreDumbbell = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-dumbbell_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="music-genre-dumbbell_svg__a"
      cx={13.875}
      cy={21.375}
      r={1.875}
    />,
    <circle
      className="music-genre-dumbbell_svg__a"
      cx={21.375}
      cy={19.125}
      r={1.875}
    />,
    <path
      className="music-genre-dumbbell_svg__a"
      d="M15.75 21.375V15a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423v5.375M16.318 1.19a1.5 1.5 0 000 2.121l4.371 4.371a1.5 1.5 0 002.121-2.121L18.439 1.19a1.5 1.5 0 00-2.121 0z"
    />,
    <path
      className="music-genre-dumbbell_svg__a"
      d="M21.784 8.778L14.2 1.189a1.5 1.5 0 00-2.125 2.121l6.725 6.722M1.189 16.318a1.5 1.5 0 012.121 0l4.372 4.372a1.5 1.5 0 11-2.122 2.121L1.189 18.44a1.5 1.5 0 010-2.122zM9.387 22.394l-8.2-8.2a1.5 1.5 0 012.12-2.121l6.907 6.907M6.557 15.322l8.764-8.765M17.443 8.679l-8.765 8.764"
    />
  );

export default SvgMusicGenreDumbbell;
