import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="playlist-warning_svg__a"
      d="M18.5 11.5v-10a1 1 0 00-1-1h-16a1 1 0 00-1 1v16a1 1 0 001 1h10"
    />,
    <circle className="playlist-warning_svg__a" cx={12} cy={12} r={1.5} />,
    <circle className="playlist-warning_svg__a" cx={5} cy={13} r={1.5} />,
    <path
      className="playlist-warning_svg__a"
      d="M6.5 13V7.254a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962V12M18.5 19v-2.5M23.376 22.021l-4-8a1 1 0 00-1.756 0l-4 8a1 1 0 00.88 1.479h8a1 1 0 00.876-1.479z"
    />,
    <path
      className="playlist-warning_svg__a"
      d="M18.5 20.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgPlaylistWarning;
