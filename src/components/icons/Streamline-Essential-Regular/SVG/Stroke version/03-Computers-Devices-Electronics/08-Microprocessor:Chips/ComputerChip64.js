import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerChip64 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-chip-64_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="computer-chip-64_svg__a"
      d="M6.75 7.5v-3M9.75 7.5v-3M3.75 10.5h-3M3.75 16.5h-3M3.75 13.5h-3M9.75 22.5v-3M18.75 16.5h-3M6.75 22.5v-3M12.75 22.5v-3M15.75 13.5V18a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5V9a1.5 1.5 0 011.5-1.5h6"
    />,
    <rect
      className="computer-chip-64_svg__a"
      x={6.75}
      y={10.5}
      width={6}
      height={6}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="computer-chip-64_svg__a"
      d="M17.25 1.5A2.25 2.25 0 0015 3.75V6"
    />,
    <circle className="computer-chip-64_svg__a" cx={16.5} cy={6} r={1.5} />,
    <path
      className="computer-chip-64_svg__a"
      d="M23.25 5.25h-3V4.5a3 3 0 013-3v6"
    />
  );

export default SvgComputerChip64;
