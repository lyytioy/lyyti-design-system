import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-music_svg__a"
      x={3.75}
      y={3.75}
      width={16.5}
      height={16.5}
      rx={3}
      ry={3}
    />,
    <path
      className="smart-watch-square-music_svg__a"
      d="M17.25 3.75H6.75v-1.5a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5zM15.75 23.25h-7.5a1.5 1.5 0 01-1.5-1.5v-1.5h10.5v1.5a1.5 1.5 0 01-1.5 1.5z"
    />,
    <circle
      className="smart-watch-square-music_svg__a"
      cx={8.25}
      cy={15.329}
      r={1.5}
    />,
    <circle
      className="smart-watch-square-music_svg__a"
      cx={14.25}
      cy={13.829}
      r={1.5}
    />,
    <path
      className="smart-watch-square-music_svg__a"
      d="M15.75 13.829V9a1.5 1.5 0 00-1.864-1.455l-3 .75A1.5 1.5 0 009.75 9.75v5.579"
    />
  );

export default SvgSmartWatchSquareMusic;
