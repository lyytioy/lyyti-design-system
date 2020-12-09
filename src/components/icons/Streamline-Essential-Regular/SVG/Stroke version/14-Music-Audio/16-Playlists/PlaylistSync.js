import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="playlist-sync_svg__a"
      d="M20.25 8.265v-6a1.5 1.5 0 00-1.5-1.5H2.25a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5H7.5"
    />,
    <circle className="playlist-sync_svg__a" cx={6.375} cy={13.14} r={1.875} />,
    <path
      className="playlist-sync_svg__a"
      d="M8.25 13.14V6.346a1.5 1.5 0 011.026-1.423l4.5-1.25A1.5 1.5 0 0115.75 5.1v3.165M19.5 15.735h3.75v-4.5M23.061 15.735a6 6 0 10-1.121 5.243"
    />
  );

export default SvgPlaylistSync;
