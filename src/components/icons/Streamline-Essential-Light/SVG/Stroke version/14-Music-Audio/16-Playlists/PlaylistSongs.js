import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistSongs = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-songs_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="playlist-songs_svg__a"
      d="M17.5 21.5a2 2 0 11-2-2h2zM23.5 18.5a2 2 0 11-2-2h2z"
    />,
    <path
      className="playlist-songs_svg__a"
      d="M17.5 19.5v-4.465a1 1 0 01.445-.832l4-2.667a1 1 0 011.555.833V16.5M5.5 1.5h13"
    />,
    <circle className="playlist-songs_svg__a" cx={1.5} cy={1.5} r={1} />,
    <path className="playlist-songs_svg__a" d="M5.5 6.5h13M5.5 11.5h12" />,
    <circle className="playlist-songs_svg__a" cx={1.5} cy={6.5} r={1} />,
    <circle className="playlist-songs_svg__a" cx={1.5} cy={11.5} r={1} />,
    <path className="playlist-songs_svg__a" d="M5.5 16.5h9" />,
    <circle className="playlist-songs_svg__a" cx={1.5} cy={16.5} r={1} />
  );

export default SvgPlaylistSongs;
