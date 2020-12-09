import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFloppyDisk = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".floppy-disk_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="floppy-disk_svg__a"
      d="M23.5 22.5a1 1 0 01-1 1h-21a1 1 0 01-1-1V5.414a1 1 0 01.293-.707L4.707.793A1 1 0 015.414.5H22.5a1 1 0 011 1z"
    />,
    <path
      className="floppy-disk_svg__a"
      d="M4.5 12.5h15a1 1 0 011 1v10h-17v-10a1 1 0 011-1zM5.5.5h13v6a1 1 0 01-1 1h-11a1 1 0 01-1-1v-6z"
    />,
    <path
      className="floppy-disk_svg__a"
      d="M14.5 2.5h2v3h-2zM6.5 15.5H13M6.5 18.5h11"
    />
  );

export default SvgFloppyDisk;
