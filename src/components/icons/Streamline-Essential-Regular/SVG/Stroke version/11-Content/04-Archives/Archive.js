import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArchive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".archive_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="archive_svg__a"
      d="M21.75 9.75v9a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-9M21.75 2.25H2.25a1.5 1.5 0 00-1.5 1.5v3h22.5v-3a1.5 1.5 0 00-1.5-1.5z"
    />,
    <path
      className="archive_svg__a"
      d="M15 11.25a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 010-3h3a1.5 1.5 0 011.5 1.5z"
    />
  );

export default SvgArchive;
