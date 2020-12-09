import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFloppyDisk1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".floppy-disk-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="floppy-disk-1_svg__a"
      d="M21.75 23.25H2.25a1.5 1.5 0 01-1.5-1.5V7.243a3 3 0 01.879-2.121l3.492-3.493A3 3 0 017.243.75H21.75a1.5 1.5 0 011.5 1.5v19.5a1.5 1.5 0 01-1.5 1.5z"
    />,
    <circle className="floppy-disk-1_svg__a" cx={12.75} cy={12.75} r={3} />,
    <path
      className="floppy-disk-1_svg__a"
      d="M12.75 20.25h6.75M8.25.75v3a1.5 1.5 0 001.5 1.5h7.5a1.5 1.5 0 001.5-1.5v-3"
    />
  );

export default SvgFloppyDisk1;
