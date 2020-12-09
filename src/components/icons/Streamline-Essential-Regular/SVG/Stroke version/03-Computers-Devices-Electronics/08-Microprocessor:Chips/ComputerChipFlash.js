import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerChipFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-chip-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="computer-chip-flash_svg__a"
      d="M6.75 8.25v-3M9.75 8.25v-3M3.75 11.25h-3M3.75 17.25h-3M3.75 14.25h-3M9.75 23.25v-3M18.75 17.25h-3M6.75 23.25v-3M12.75 23.25v-3M15.75 14.25v4.5a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h7.5"
    />,
    <rect
      className="computer-chip-flash_svg__a"
      x={6.75}
      y={11.25}
      width={6}
      height={6}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="computer-chip-flash_svg__a"
      d="M17.25.75h6L21 4.5h2.25l-6 6.75L18 6h-2.25l1.5-5.25z"
    />
  );

export default SvgComputerChipFlash;
