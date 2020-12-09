import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArchiveFolder = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".archive-folder_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="archive-folder_svg__a"
      d="M3.75 10.875h16.5M3.75 7.125h16.5M3.75 3.375h16.5M22.5 14.625H15a3 3 0 01-6 0H1.5a.75.75 0 00-.75.75v3.75a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5v-3.75a.75.75 0 00-.75-.75z"
    />
  );

export default SvgArchiveFolder;
