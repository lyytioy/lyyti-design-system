import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerChipCore = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-chip-core_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="computer-chip-core_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="computer-chip-core_svg__a"
      d="M16.5 21.5h-3L12 20l-1.5 1.5h-3v-19h3L12 4l1.5-1.5h3v19zM18.5 4.5H21M18.5 7.5H21M18.5 10.5H21M18.5 13.5H21M18.5 16.5H21M18.5 19.5H21M3 4.5h2.5M3 7.5h2.5M3 10.5h2.5M3 13.5h2.5M3 16.5h2.5M3 19.5h2.5"
    />
  );

export default SvgComputerChipCore;
