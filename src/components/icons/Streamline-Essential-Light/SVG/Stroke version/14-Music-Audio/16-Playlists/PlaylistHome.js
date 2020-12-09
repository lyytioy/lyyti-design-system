import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="playlist-home_svg__a"
      d="M18.5 11.5v-10a1 1 0 00-1-1h-16a1 1 0 00-1 1v16a1 1 0 001 1h9"
    />,
    <circle className="playlist-home_svg__a" cx={12} cy={12} r={1.5} />,
    <circle className="playlist-home_svg__a" cx={5} cy={13} r={1.5} />,
    <path
      className="playlist-home_svg__a"
      d="M6.5 13V7.254a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962V12M16.5 23.5V21a1.5 1.5 0 013 0v2.5"
    />,
    <path className="playlist-home_svg__a" d="M14.5 17.682V23.5h7v-5.818" />,
    <path className="playlist-home_svg__a" d="M12.5 19.5l5.5-5 5.5 5" />
  );

export default SvgPlaylistHome;
