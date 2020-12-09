import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="playlist-edit_svg__a"
      d="M18.5 11.5v-10a1 1 0 00-1-1h-16a1 1 0 00-1 1v16a1 1 0 001 1h10"
    />,
    <circle className="playlist-edit_svg__a" cx={12} cy={12} r={1.5} />,
    <circle className="playlist-edit_svg__a" cx={5} cy={13} r={1.5} />,
    <path
      className="playlist-edit_svg__a"
      d="M6.5 13V7.254a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962V12M17 22.5l-3.5 1 1-3.5 5.982-5.982a1.768 1.768 0 012.5 2.5zM19.732 14.768l2.5 2.5M14.5 20l2.5 2.5"
    />
  );

export default SvgPlaylistEdit;
