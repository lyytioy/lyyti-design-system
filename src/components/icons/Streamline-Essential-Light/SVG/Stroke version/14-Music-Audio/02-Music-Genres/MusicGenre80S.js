import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenre80S = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-80s_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="music-genre-80s_svg__a"
      x={0.5}
      y={2.5}
      width={23}
      height={21}
      rx={1}
      ry={1}
    />,
    <path
      className="music-genre-80s_svg__a"
      d="M5.5.5v5M18.5.5v5M.5 7.5h23M20.5 14.5h-1a1 1 0 00-1 1c0 1.5 2 1.5 2 3a1 1 0 01-1 1h-1M16.5 17a2.5 2.5 0 01-5 0v-3a2.5 2.5 0 015 0z"
    />,
    <circle className="music-genre-80s_svg__a" cx={7} cy={17} r={2.5} />,
    <circle className="music-genre-80s_svg__a" cx={7} cy={13} r={1.5} />
  );

export default SvgMusicGenre80S;
