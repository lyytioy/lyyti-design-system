import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="music-genre-star_svg__a" cx={13.5} cy={21.5} r={2} />,
    <circle className="music-genre-star_svg__a" cx={21.5} cy={19.5} r={2} />,
    <path
      className="music-genre-star_svg__a"
      d="M23.5 19.5v-6.795a1 1 0 00-1.184-.983l-6 1.125a1 1 0 00-.816.983v7.67M13 17.022l-3.373-2.379-5.343 3.774a.429.429 0 01-.66-.481l2.146-6.293L.65 7.254A.429.429 0 01.929 6.5h6.127L9.226.778a.428.428 0 01.8 0L12.2 6.5h6.127a.429.429 0 01.279.754l-5.121 4.389.462 1.357"
    />
  );

export default SvgMusicGenreStar;
