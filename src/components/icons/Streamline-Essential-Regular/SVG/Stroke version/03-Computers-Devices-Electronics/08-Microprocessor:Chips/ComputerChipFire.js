import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerChipFire = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-chip-fire_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="computer-chip-fire_svg__a"
      d="M6.75 8.25v-3M9.75 8.25v-3M3.75 11.25h-3M3.75 17.25h-3M3.75 14.25h-3M9.75 23.25v-3M18.75 17.25h-3M6.75 23.25v-3M12.75 23.25v-3M15.75 14.25v4.5a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5H12"
    />,
    <rect
      className="computer-chip-fire_svg__a"
      x={6.75}
      y={11.25}
      width={6}
      height={6}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="computer-chip-fire_svg__a"
      d="M18.312.75a4.375 4.375 0 01.444 4.986 1.558 1.558 0 01-1.662-1.329 3.527 3.527 0 00-1.829 3.324 3.989 3.989 0 003.989 3.989 4.044 4.044 0 003.989-3.989A6.631 6.631 0 0018.312.75z"
    />
  );

export default SvgComputerChipFire;
