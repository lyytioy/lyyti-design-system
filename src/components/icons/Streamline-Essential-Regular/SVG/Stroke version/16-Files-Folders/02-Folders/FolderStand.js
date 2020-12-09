import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderStand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-stand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-stand_svg__a"
      d="M21 18.75a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-1.5-1.5H9v-1.5A1.5 1.5 0 007.5.75H3a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5zM12 18.75v4.5M6 23.25h12M1.5 23.25H3M21 23.25h1.5"
    />
  );

export default SvgFolderStand;
