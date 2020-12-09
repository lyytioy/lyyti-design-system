import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerChipCore = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-chip-core_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="computer-chip-core_svg__a"
      x={5.25}
      y={0.75}
      width={13.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="computer-chip-core_svg__a"
      d="M2.25 9.851h3M2.25 5.351h3M2.25 14.351h3M2.25 18.851h3M18.75 9.851h3M18.75 5.351h3M18.75 14.351h3M18.75 18.851h3M15.75 20.25h-1.5"
    />
  );

export default SvgComputerChipCore;
