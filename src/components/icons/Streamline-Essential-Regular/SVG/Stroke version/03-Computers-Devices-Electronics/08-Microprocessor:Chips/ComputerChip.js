import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerChip = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-chip_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="computer-chip_svg__a"
      x={3.75}
      y={3.75}
      width={16.5}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="computer-chip_svg__a"
      d="M12 3.75V1.5M6.75 3.75V1.5M17.25 3.75V1.5M12 22.5v-2.25M6.75 22.5v-2.25M17.25 22.5v-2.25M22.5 12h-2.25M22.5 17.25h-2.25M22.5 6.75h-2.25M3.75 12H1.5M3.75 17.25H1.5M3.75 6.75H1.5"
    />,
    <rect
      className="computer-chip_svg__a"
      x={6.75}
      y={6.75}
      width={10.5}
      height={10.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="computer-chip_svg__a" d="M14.25 14.25H12" />
  );

export default SvgComputerChip;
