import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistSongs1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-songs-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="playlist-songs-1_svg__a"
      d="M.75.75h13.5M.75 6.75h13.5M.75 12.75h9.75M.75 18.75h6"
    />,
    <circle className="playlist-songs-1_svg__a" cx={13.5} cy={19.5} r={3.75} />,
    <path
      className="playlist-songs-1_svg__a"
      d="M17.25 19.5V2.25M17.25 3.617L20.826 5.8c2.439 1.885 3.1 4.511 1.7 6.816"
    />
  );

export default SvgPlaylistSongs1;
