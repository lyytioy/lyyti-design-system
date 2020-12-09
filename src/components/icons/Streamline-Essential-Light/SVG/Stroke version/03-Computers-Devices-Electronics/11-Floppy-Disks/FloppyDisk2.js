import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFloppyDisk2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".floppy-disk-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="floppy-disk-2_svg__a"
      d="M23.5 1.5a1 1 0 00-1-1H3.914a1 1 0 00-.707.293L.793 3.207a1 1 0 00-.293.707V22.5a1 1 0 001 1h21a1 1 0 001-1z"
    />,
    <path
      className="floppy-disk-2_svg__a"
      d="M19.5 6.5a1 1 0 01-1 1h-13a1 1 0 01-1-1v-6h15zM4.5 23.5h15v-3a1 1 0 00-1-1h-13a1 1 0 00-1 1z"
    />,
    <circle className="floppy-disk-2_svg__a" cx={12} cy={13.5} r={3} />
  );

export default SvgFloppyDisk2;
