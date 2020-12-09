import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerChipFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-chip-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="computer-chip-flash_svg__a"
      d="M23 .5l-3.663 4H23.5l-7 6 1.725-4H15.5l2.5-6h5zM15.5 12.5v7a1 1 0 01-1 1h-10a1 1 0 01-1-1v-10a1 1 0 011-1h9M9.5 20.5v3M13.5 20.5v3M9.5 5.5v3M5.5 20.5v3M5.5 5.5v3M15.5 18.5h3M3.5 14.5h-3M18.5 14.5h-3M3.5 10.5h-3M3.5 18.5h-3"
    />,
    <rect
      className="computer-chip-flash_svg__a"
      x={5.5}
      y={10.5}
      width={8}
      height={8}
      rx={2}
      ry={2}
    />
  );

export default SvgComputerChipFlash;
