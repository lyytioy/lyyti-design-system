import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistSongs = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-songs_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="playlist-songs_svg__a"
      cx={21.052}
      cy={18.052}
      r={2.198}
    />,
    <circle
      className="playlist-songs_svg__a"
      cx={10.552}
      cy={21.052}
      r={2.198}
    />,
    <path
      className="playlist-songs_svg__a"
      d="M12.75 21.052V11.4a2.068 2.068 0 011.415-1.963l6.362-1.727a2.068 2.068 0 012.723 1.962v8.38M5.25.75h15M5.25 6.75h6M5.25 12.75h3M1.5 1.125A.375.375 0 111.125.75a.375.375 0 01.375.375M1.5 6.375A.375.375 0 111.125 6a.375.375 0 01.375.375M1.5 12.375A.375.375 0 111.125 12a.375.375 0 01.375.375"
    />
  );

export default SvgPlaylistSongs;
