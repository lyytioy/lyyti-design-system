import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicPlayer1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-player-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="music-player-1_svg__a"
      d="M21.5 8a1 1 0 01-2 0V5a1 1 0 012 0zM19.5 8H19a1.5 1.5 0 010-3h.5z"
    />,
    <rect
      className="music-player-1_svg__a"
      x={2.5}
      y={0.5}
      width={12}
      height={23}
      rx={1.5}
      ry={1.5}
    />,
    <path className="music-player-1_svg__a" d="M2.5 13.5h12" />,
    <circle className="music-player-1_svg__a" cx={8.5} cy={18.5} r={2.5} />,
    <path className="music-player-1_svg__a" d="M14.5 13.5a3 3 0 006 0V9" />
  );

export default SvgMusicPlayer1;
