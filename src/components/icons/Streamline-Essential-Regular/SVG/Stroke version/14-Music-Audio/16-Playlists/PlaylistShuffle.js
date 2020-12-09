import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistShuffle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-shuffle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="playlist-shuffle_svg__a"
      d="M20.25 10.5V2.25a1.5 1.5 0 00-1.5-1.5H2.25a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h6"
    />,
    <circle
      className="playlist-shuffle_svg__a"
      cx={6.375}
      cy={13.125}
      r={1.875}
    />,
    <path
      className="playlist-shuffle_svg__a"
      d="M8.25 13.125V6.331a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423v5.794"
    />,
    <circle
      className="playlist-shuffle_svg__a"
      cx={13.875}
      cy={10.875}
      r={1.875}
    />,
    <path
      className="playlist-shuffle_svg__a"
      d="M23.25 21.75h-3a3.565 3.565 0 01-2.961-2.091l-1.1-2.091a3 3 0 00-2.757-1.818H11.25"
    />,
    <path
      className="playlist-shuffle_svg__a"
      d="M21.75 23.25l1.5-1.502-1.5-1.5M23.25 15.75h-3a3.565 3.565 0 00-2.961 2.091l-1.1 2.091a3 3 0 01-2.757 1.818H11.25"
    />,
    <path
      className="playlist-shuffle_svg__a"
      d="M21.75 14.25l1.5 1.498-1.5 1.5"
    />
  );

export default SvgPlaylistShuffle;
