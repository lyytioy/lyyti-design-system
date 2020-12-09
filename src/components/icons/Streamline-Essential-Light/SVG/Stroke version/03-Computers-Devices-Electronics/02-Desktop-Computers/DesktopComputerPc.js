import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopComputerPc = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-computer-pc_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="desktop-computer-pc_svg__a"
      x={0.5}
      y={7.5}
      width={14}
      height={11}
      rx={1}
      ry={1}
    />,
    <path
      className="desktop-computer-pc_svg__a"
      d="M7.5 18.5v3M4.496 21.5h6M13.5 5.5v-2a1 1 0 011-1h8a1 1 0 011 1v17a1 1 0 01-1 1h-8a1 1 0 01-1-1M23.5 6.5h-7M23.5 9.5h-7"
    />,
    <circle className="desktop-computer-pc_svg__a" cx={18.5} cy={16} r={1.5} />
  );

export default SvgDesktopComputerPc;
