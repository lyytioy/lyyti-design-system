import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerChipShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-chip-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="computer-chip-shield_svg__a"
      d="M18 11.25a8.663 8.663 0 01-5.25-7.962V2.25a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5v1.038A8.663 8.663 0 0118 11.25zM22.844 1.225l-8.62 6.896M6.75 8.25v-3M9.75 8.25v-3M3.75 11.25h-3M3.75 17.25h-3M3.75 14.25h-3M9.75 23.25v-3M18.75 17.25h-3M6.75 23.25v-3M12.75 23.25v-3M15.75 14.25v4.5a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h6"
    />,
    <rect
      className="computer-chip-shield_svg__a"
      x={6.75}
      y={11.25}
      width={6}
      height={6}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgComputerChipShield;
