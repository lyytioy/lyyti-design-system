import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="playlist-disable_svg__a"
      d="M18.5 11.5v-10a1 1 0 00-1-1h-16a1 1 0 00-1 1v16a1 1 0 001 1h10"
    />,
    <circle className="playlist-disable_svg__a" cx={12} cy={12} r={1.5} />,
    <circle className="playlist-disable_svg__a" cx={5} cy={13} r={1.5} />,
    <path
      className="playlist-disable_svg__a"
      d="M6.5 13V7.254a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962V12"
    />,
    <circle className="playlist-disable_svg__a" cx={18.5} cy={18.5} r={5} />,
    <path className="playlist-disable_svg__a" d="M22.035 14.965l-7.071 7.071" />
  );

export default SvgPlaylistDisable;
