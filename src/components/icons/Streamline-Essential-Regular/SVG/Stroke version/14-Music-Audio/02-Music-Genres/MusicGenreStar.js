import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="music-genre-star_svg__a"
      cx={13.875}
      cy={21.375}
      r={1.875}
    />,
    <circle
      className="music-genre-star_svg__a"
      cx={21.375}
      cy={19.125}
      r={1.875}
    />,
    <path
      className="music-genre-star_svg__a"
      d="M15.75 21.375v-6.794a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423v5.794"
    />,
    <path
      className="music-genre-star_svg__a"
      d="M8.641 21.6L5.48 23.163a.812.812 0 01-1.151-.934l1.965-7.138L.99 9.837a.805.805 0 01.5-1.374l6.44-.638L11.271 1.2a.818.818 0 011.458 0l3.346 6.628 6.44.638a.8.8 0 01.662.472"
    />
  );

export default SvgMusicGenreStar;
