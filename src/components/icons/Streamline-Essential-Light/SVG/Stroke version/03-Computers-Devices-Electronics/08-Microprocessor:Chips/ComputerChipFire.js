import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerChipFire = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-chip-fire_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="computer-chip-fire_svg__a"
      d="M15.5 12.5v7a1 1 0 01-1 1h-10a1 1 0 01-1-1v-10a1 1 0 011-1h9M9.5 20.5v3M13.5 20.5v3M9.5 5.5v3M5.5 20.5v3M5.5 5.5v3M15.5 18.5h3M3.5 14.5h-3M18.5 14.5h-3M3.5 10.5h-3M3.5 18.5h-3"
    />,
    <rect
      className="computer-chip-fire_svg__a"
      x={5.5}
      y={10.5}
      width={8}
      height={8}
      rx={2}
      ry={2}
    />,
    <path
      className="computer-chip-fire_svg__a"
      d="M18 .5a3.994 3.994 0 011 5A2.308 2.308 0 0118 4a3.653 3.653 0 00-2.5 3.5 4 4 0 008 0 7.3 7.3 0 00-5.5-7z"
    />
  );

export default SvgComputerChipFire;
