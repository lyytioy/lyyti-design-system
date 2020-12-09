import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistStarFavorite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-star-favorite_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="playlist-star-favorite_svg__a"
      d="M18.5 9.5v-8a1 1 0 00-1-1h-16a1 1 0 00-1 1v16a1 1 0 001 1h8"
    />,
    <circle
      className="playlist-star-favorite_svg__a"
      cx={12}
      cy={12}
      r={1.5}
    />,
    <circle className="playlist-star-favorite_svg__a" cx={5} cy={13} r={1.5} />,
    <path
      className="playlist-star-favorite_svg__a"
      d="M6.5 13V7.254a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962V12M18.206 11.93l1.539 3.57h2.995a.735.735 0 01.517 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.117.982l-3.48-1.961-3.48 1.961a.785.785 0 01-1.117-.982l1.44-3.313-2.6-2.316a.734.734 0 01.514-1.283h3l1.541-3.57a.8.8 0 011.408 0z"
    />
  );

export default SvgPlaylistStarFavorite;
