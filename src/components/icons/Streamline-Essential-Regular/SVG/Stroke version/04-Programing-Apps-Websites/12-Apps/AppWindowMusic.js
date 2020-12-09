import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-music_svg__a"
      d="M18.76 21.753h2.25a1.5 1.5 0 001.5-1.5v-16.5a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h1.5M1.51 6.753h21"
    />,
    <circle
      className="app-window-music_svg__a"
      cx={8.635}
      cy={19.128}
      r={1.875}
    />,
    <circle
      className="app-window-music_svg__a"
      cx={16.135}
      cy={16.878}
      r={1.875}
    />,
    <path
      className="app-window-music_svg__a"
      d="M10.51 19.128v-6.793a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423v5.793"
    />
  );

export default SvgAppWindowMusic;
