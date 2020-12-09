import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistShuffle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-shuffle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="playlist-shuffle_svg__a"
      d="M23.5 16.75h-2c-2.509 0-3.492 5-6 5h-1"
    />,
    <path
      className="playlist-shuffle_svg__a"
      d="M22 15.25l1.5 1.5-1.5 1.5M23.5 21.75h-2c-2.509 0-3.492-5-6-5h-1"
    />,
    <path
      className="playlist-shuffle_svg__a"
      d="M22 23.25l1.5-1.5-1.5-1.5M18.5 13.75v-12a1 1 0 00-1-1h-16a1 1 0 00-1 1v16a1 1 0 001 1h10"
    />,
    <circle className="playlist-shuffle_svg__a" cx={12} cy={12.25} r={1.5} />,
    <circle className="playlist-shuffle_svg__a" cx={5} cy={13.25} r={1.5} />,
    <path
      className="playlist-shuffle_svg__a"
      d="M6.5 13.25V7.5a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962v6.178"
    />
  );

export default SvgPlaylistShuffle;
