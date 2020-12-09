import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistMenu = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-menu_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="playlist-menu_svg__a"
      d="M20.25 11.25V3a1.5 1.5 0 00-1.5-1.5H2.25A1.5 1.5 0 00.75 3v15a1.5 1.5 0 001.5 1.5h6"
    />,
    <circle
      className="playlist-menu_svg__a"
      cx={6.375}
      cy={13.875}
      r={1.875}
    />,
    <path
      className="playlist-menu_svg__a"
      d="M8.25 13.875V7.081a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423v5.794"
    />,
    <circle
      className="playlist-menu_svg__a"
      cx={13.875}
      cy={11.625}
      r={1.875}
    />,
    <path
      className="playlist-menu_svg__a"
      d="M23.25 22.5h-10.5M23.25 19.5h-10.5M23.25 16.5h-10.5"
    />
  );

export default SvgPlaylistMenu;
