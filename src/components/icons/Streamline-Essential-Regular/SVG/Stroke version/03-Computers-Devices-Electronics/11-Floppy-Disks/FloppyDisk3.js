import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFloppyDisk3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".floppy-disk-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="floppy-disk-3_svg__a" cx={12} cy={12} r={10.5} />,
    <path
      className="floppy-disk-3_svg__a"
      d="M12 11.25a.75.75 0 11-.75.75.75.75 0 01.75-.75M12 4.5v3M5.505 15.75l2.598-1.5M18.495 15.75l-2.598-1.5"
    />
  );

export default SvgFloppyDisk3;
