import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerChip8 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-chip-8_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="computer-chip-8_svg__a"
      d="M7.5 7.5v-3M10.5 7.5v-3M4.5 10.5h-3M4.5 16.5h-3M4.5 13.5h-3M10.5 22.5v-3M19.5 16.5h-3M7.5 22.5v-3M13.5 22.5v-3M16.5 13.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18V9A1.5 1.5 0 016 7.5h6"
    />,
    <rect
      className="computer-chip-8_svg__a"
      x={7.5}
      y={10.5}
      width={6}
      height={6}
      rx={0.75}
      ry={0.75}
    />,
    <circle className="computer-chip-8_svg__a" cx={20.25} cy={6.75} r={2.25} />,
    <circle className="computer-chip-8_svg__a" cx={20.25} cy={3} r={1.5} />
  );

export default SvgComputerChip8;
