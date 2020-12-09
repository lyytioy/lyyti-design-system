import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArchiveFolder = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".archive-folder_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="archive-folder_svg__a"
      d="M17.5 12.5a1 1 0 00-1 1 1 1 0 01-1 1h-7a1 1 0 01-1-1 1 1 0 00-1-1h-5a1 1 0 00-1 1v6a1 1 0 001 1h21a1 1 0 001-1v-6a1 1 0 00-1-1zM9.5 12.5h5M2.5 10.5a1 1 0 011-1h17a1 1 0 011 1M2.5 7.5a1 1 0 011-1h17a1 1 0 011 1M2.5 4.5a1 1 0 011-1h17a1 1 0 011 1"
    />
  );

export default SvgArchiveFolder;
