import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylist = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="playlist_svg__a"
      x={2.5}
      y={2.5}
      width={19}
      height={19}
      rx={1}
      ry={1}
    />,
    <path
      className="playlist_svg__a"
      d="M21.5 4.5h1a1 1 0 011 1v13a1 1 0 01-1 1h-1M2.5 19.5h-1a1 1 0 01-1-1v-13a1 1 0 011-1h1"
    />,
    <circle className="playlist_svg__a" cx={15} cy={14} r={1.5} />,
    <circle className="playlist_svg__a" cx={8} cy={15} r={1.5} />,
    <path
      className="playlist_svg__a"
      d="M9.5 15V9.254a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962V14"
    />
  );

export default SvgPlaylist;
