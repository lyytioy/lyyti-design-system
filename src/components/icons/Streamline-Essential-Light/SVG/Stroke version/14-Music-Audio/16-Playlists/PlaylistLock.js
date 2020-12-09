import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="playlist-lock_svg__a"
      d="M18.5 9.5v-8a1 1 0 00-1-1h-16a1 1 0 00-1 1v16a1 1 0 001 1h10"
    />,
    <circle className="playlist-lock_svg__a" cx={12} cy={12} r={1.5} />,
    <circle className="playlist-lock_svg__a" cx={5} cy={13} r={1.5} />,
    <path
      className="playlist-lock_svg__a"
      d="M6.5 13V7.254a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962V12"
    />,
    <rect
      className="playlist-lock_svg__a"
      x={14.5}
      y={16.5}
      width={9}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="playlist-lock_svg__a"
      d="M19 19a1 1 0 101 1 1 1 0 00-1-1zM16.5 16.5V15a2.5 2.5 0 015 0v1.5"
    />
  );

export default SvgPlaylistLock;
