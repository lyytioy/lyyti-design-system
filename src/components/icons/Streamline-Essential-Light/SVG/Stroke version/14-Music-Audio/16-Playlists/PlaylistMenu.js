import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistMenu = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-menu_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="playlist-menu_svg__a"
      d="M18.5 14V2a1 1 0 00-1-1h-16a1 1 0 00-1 1v16a1 1 0 001 1h10"
    />,
    <circle className="playlist-menu_svg__a" cx={12} cy={12.5} r={1.5} />,
    <circle className="playlist-menu_svg__a" cx={5} cy={13.5} r={1.5} />,
    <path
      className="playlist-menu_svg__a"
      d="M6.5 13.5V7.754a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962V12.5M14.5 17h9M14.5 19h9M14.5 21h9M14.5 23h9"
    />
  );

export default SvgPlaylistMenu;
