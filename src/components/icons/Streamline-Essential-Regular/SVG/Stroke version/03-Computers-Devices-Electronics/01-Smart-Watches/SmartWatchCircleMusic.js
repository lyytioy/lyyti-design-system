import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="smart-watch-circle-music_svg__a"
      cx={12.375}
      cy={10.294}
      r={1.875}
    />,
    <circle
      className="smart-watch-circle-music_svg__a"
      cx={19.875}
      cy={8.044}
      r={1.875}
    />,
    <path
      className="smart-watch-circle-music_svg__a"
      d="M14.25 10.294V3.5a1.5 1.5 0 011.026-1.423l4.5-1.25A1.5 1.5 0 0121.75 2.25v5.794M15.282 14.475A6.747 6.747 0 1110.93 5.53"
    />,
    <path
      className="smart-watch-circle-music_svg__a"
      d="M4.5 6.97V2.25A1.5 1.5 0 016 .75h4.5M13.5 17.031v4.719a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 01-1.5-1.5v-4.719"
    />
  );

export default SvgSmartWatchCircleMusic;
