import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderFile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-file_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-file_svg__a"
      d="M17.25 23.25a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5h-9v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5z"
    />,
    <path
      className="folder-file_svg__a"
      d="M6.75 11.25v-9a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V18.75a1.5 1.5 0 01-1.5 1.5h-3M11.25 5.25h7.5M11.25 9.75h7.5"
    />
  );

export default SvgFolderFile;
