import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistRepeat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-repeat_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="playlist-repeat_svg__a"
      d="M20.25 10.5V2.249a1.5 1.5 0 00-1.5-1.5H2.25a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5H7.5"
    />,
    <path
      className="playlist-repeat_svg__a"
      d="M15 21.749h-1.125a3.385 3.385 0 01-3.375-3.375A3.385 3.385 0 0113.875 15h1.875"
    />,
    <path
      className="playlist-repeat_svg__a"
      d="M14.25 13.501l1.5 1.498-1.5 1.5M18.75 15h1.125a3.385 3.385 0 013.375 3.375 3.385 3.385 0 01-3.375 3.375H18"
    />,
    <path
      className="playlist-repeat_svg__a"
      d="M19.5 23.251L18 21.749l1.5-1.5"
    />,
    <circle
      className="playlist-repeat_svg__a"
      cx={6.375}
      cy={13.124}
      r={1.875}
    />,
    <path
      className="playlist-repeat_svg__a"
      d="M8.25 13.124V6.33a1.5 1.5 0 011.026-1.423l4.5-1.25A1.5 1.5 0 0115.75 5.08v5.42"
    />
  );

export default SvgPlaylistRepeat;
