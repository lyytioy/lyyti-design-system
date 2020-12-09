import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicPlayer1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-player-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="music-player-1_svg__a" d="M.75 3.75h13.5v7.5H.75z" />,
    <circle className="music-player-1_svg__a" cx={7.5} cy={17.25} r={3} />,
    <path
      className="music-player-1_svg__a"
      d="M20.25 9.75a1.5 1.5 0 003 0v-4.5a1.5 1.5 0 00-3 0zM20.25 9.75a2.25 2.25 0 010-4.5"
    />,
    <path
      className="music-player-1_svg__a"
      d="M14.25 16.5a3.75 3.75 0 007.5 0v-5.25"
    />,
    <rect
      className="music-player-1_svg__a"
      x={0.75}
      y={0.75}
      width={13.5}
      height={22.5}
      rx={1}
      ry={1}
    />
  );

export default SvgMusicPlayer1;
