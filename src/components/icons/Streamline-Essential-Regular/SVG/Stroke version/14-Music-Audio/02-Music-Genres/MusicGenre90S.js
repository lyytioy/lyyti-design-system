import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenre90S = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-90s_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="music-genre-90s_svg__a"
      x={0.75}
      y={3.75}
      width={22.5}
      height={19.5}
      rx={1}
      ry={1}
    />,
    <path
      className="music-genre-90s_svg__a"
      d="M.75 9.75h22.5M6.75 6V.75M17.25 6V.75M13.5 18a1.5 1.5 0 01-3 0v-3a1.5 1.5 0 013 0zM18.75 15h-1.125a1.032 1.032 0 00-1.125.9c0 1.35 2.25 1.35 2.25 2.7a1.032 1.032 0 01-1.125.9H16.5M7.5 15v2.25a2.25 2.25 0 01-2.25 2.25"
    />,
    <circle className="music-genre-90s_svg__a" cx={6} cy={15} r={1.5} />
  );

export default SvgMusicGenre90S;
