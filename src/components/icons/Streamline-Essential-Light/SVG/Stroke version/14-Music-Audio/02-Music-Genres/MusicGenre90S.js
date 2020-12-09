import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenre90S = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-90s_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="music-genre-90s_svg__a"
      x={0.5}
      y={2.5}
      width={23}
      height={21}
      rx={1}
      ry={1}
    />,
    <path
      className="music-genre-90s_svg__a"
      d="M5.5.5v5M18.5.5v5M.5 7.5h23M20.5 14.5h-1a1 1 0 00-1 1c0 1.5 2 1.5 2 3a1 1 0 01-1 1h-1"
    />,
    <circle className="music-genre-90s_svg__a" cx={7} cy={14} r={2.5} />,
    <path
      className="music-genre-90s_svg__a"
      d="M9.5 14v2.5a3 3 0 01-3 3H6M16.5 17a2.5 2.5 0 01-5 0v-3a2.5 2.5 0 015 0z"
    />
  );

export default SvgMusicGenre90S;
