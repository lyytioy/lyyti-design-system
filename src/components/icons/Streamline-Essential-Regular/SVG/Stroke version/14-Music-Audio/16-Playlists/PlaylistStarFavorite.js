import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistStarFavorite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-star-favorite_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="playlist-star-favorite_svg__a"
      d="M20.25 8.25v-6a1.5 1.5 0 00-1.5-1.5H2.25a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5H9"
    />,
    <circle
      className="playlist-star-favorite_svg__a"
      cx={6.375}
      cy={13.125}
      r={1.875}
    />,
    <path
      className="playlist-star-favorite_svg__a"
      d="M8.25 13.125V6.331a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423V9M17.947 11.68l1.541 4.07h3a.735.735 0 01.518 1.283l-2.6 1.816 1.442 3.313a.786.786 0 01-1.119.982l-3.489-1.961-3.487 1.961a.786.786 0 01-1.119-.982l1.443-3.313-2.6-1.816a.734.734 0 01.515-1.283h3l1.544-4.07a.8.8 0 011.411 0z"
    />
  );

export default SvgPlaylistStarFavorite;
