import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-player_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="music-player_svg__a" d="M.75 12.75h12" />,
    <circle className="music-player_svg__a" cx={6.75} cy={18} r={2.25} />,
    <path
      className="music-player_svg__a"
      d="M3.75 9.75v-4.5M6.75 9.75V7.5M9.75 9.75V6M12.75 20.25h4.5a3 3 0 003-3v-12M23.25 4.5a.75.75 0 01-.75.75h-2.25V1.5A.75.75 0 0121 .75h1.5a.75.75 0 01.75.75zM17.25 1.5v3"
    />,
    <rect
      className="music-player_svg__a"
      x={0.75}
      y={0.75}
      width={12}
      height={22.5}
      rx={1}
      ry={1}
    />
  );

export default SvgMusicPlayer;
