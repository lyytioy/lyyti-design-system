import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-player_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="music-player_svg__a"
      x={0.5}
      y={0.5}
      width={13}
      height={23}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="music-player_svg__a"
      d="M.5 14.5h13M13.5 3.5H16A1.5 1.5 0 0117.5 5v14a2.5 2.5 0 005 0v-7.5"
    />,
    <path
      className="music-player_svg__a"
      d="M23.5 10.5a1 1 0 01-2 0v-3a1 1 0 012 0zM21.5 10.5H21a1.5 1.5 0 010-3h.5zM3 5.5h1.5M3 7.5h1.5M3 9.5h1.5M3 11.5h1.5M9.5 7.5H11M9.5 9.5H11M9.5 11.5H11M6.5 9.5h1M6.5 11.5h1M6 17.889a.389.389 0 01.389-.389.382.382 0 01.205.059l1.694 1.059a.45.45 0 010 .764l-1.694 1.059a.382.382 0 01-.205.059.389.389 0 01-.389-.389z"
    />
  );

export default SvgMusicPlayer;
