import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArchive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".archive_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="archive_svg__a"
      d="M23.5 7a1 1 0 01-1 1h-21a1 1 0 01-1-1V4a1 1 0 011-1h21a1 1 0 011 1zM22.5 10v10a1 1 0 01-1 1h-19a1 1 0 01-1-1V10"
    />,
    <path
      className="archive_svg__a"
      d="M15.5 12.5A1.5 1.5 0 0114 14h-4a1.5 1.5 0 010-3h4a1.5 1.5 0 011.5 1.5z"
    />
  );

export default SvgArchive;
