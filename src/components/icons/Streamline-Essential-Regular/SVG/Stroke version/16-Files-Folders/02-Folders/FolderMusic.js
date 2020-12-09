import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-music_svg__a"
      d="M18.75 6.75v-1.5a1.5 1.5 0 00-1.5-1.5h-9v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v16.3"
    />,
    <path
      className="folder-music_svg__a"
      d="M3.75 20.25v-12a1.5 1.5 0 011.5-1.5h15a1.5 1.5 0 011.5 1.5v1.5"
    />,
    <path
      className="folder-music_svg__a"
      d="M8.25 23.25a1.5 1.5 0 01-1.5-1.5v-10.5a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5"
    />,
    <circle className="folder-music_svg__a" cx={12.75} cy={21.75} r={1.5} />,
    <circle className="folder-music_svg__a" cx={18.75} cy={20.25} r={1.5} />,
    <path
      className="folder-music_svg__a"
      d="M20.25 20.25v-4.829a1.5 1.5 0 00-1.864-1.455l-3 .75a1.5 1.5 0 00-1.136 1.455v5.579"
    />
  );

export default SvgFolderMusic;
