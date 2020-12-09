import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicPlayer2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-player-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="music-player-2_svg__a"
      x={4.5}
      y={0.5}
      width={15}
      height={23}
      rx={2}
      ry={2}
    />,
    <rect
      className="music-player-2_svg__a"
      x={6.5}
      y={2.5}
      width={11}
      height={8}
      rx={0.5}
      ry={0.5}
    />,
    <circle className="music-player-2_svg__a" cx={12} cy={17} r={4.5} />,
    <circle className="music-player-2_svg__a" cx={12} cy={17} r={2.5} />
  );

export default SvgMusicPlayer2;
