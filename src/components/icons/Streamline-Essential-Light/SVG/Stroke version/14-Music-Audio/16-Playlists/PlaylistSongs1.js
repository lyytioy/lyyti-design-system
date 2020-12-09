import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistSongs1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-songs-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="playlist-songs-1_svg__a"
      d="M.5 7.5h12M.5 3.5h12M.5 19.5h7M.5 11.5h12M.5 15.5h12"
    />,
    <circle className="playlist-songs-1_svg__a" cx={15.5} cy={20.5} r={3} />,
    <path
      className="playlist-songs-1_svg__a"
      d="M21.5 9.477A4.985 4.985 0 0018.5.5v20"
    />
  );

export default SvgPlaylistSongs1;
