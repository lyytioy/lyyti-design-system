import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="playlist-home_svg__a"
      d="M20.25 9.75v-7.5a1.5 1.5 0 00-1.5-1.5H2.25a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h6"
    />,
    <circle
      className="playlist-home_svg__a"
      cx={6.375}
      cy={13.125}
      r={1.875}
    />,
    <path
      className="playlist-home_svg__a"
      d="M8.25 13.125V6.331a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423V9.75M12.75 15.948v5.8a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-5.8"
    />,
    <path
      className="playlist-home_svg__a"
      d="M11.25 17.26l4.518-3.953a2.249 2.249 0 012.964 0l4.518 3.953M18.75 23.25h-3v-3a1.5 1.5 0 013 0z"
    />
  );

export default SvgPlaylistHome;
