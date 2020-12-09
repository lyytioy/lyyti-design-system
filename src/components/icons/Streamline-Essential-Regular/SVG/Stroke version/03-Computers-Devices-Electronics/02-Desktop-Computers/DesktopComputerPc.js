import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopComputerPc = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-computer-pc_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="desktop-computer-pc_svg__a"
      d="M19.875 15.75a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <rect
      className="desktop-computer-pc_svg__a"
      x={0.75}
      y={4.5}
      width={15}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="desktop-computer-pc_svg__a"
      d="M18.75 6.75h3a1.5 1.5 0 011.5 1.5V18a1.5 1.5 0 01-1.5 1.5h-4.5M8.25 16.5v3M5.25 19.5h6M18.75 9.75h4.5M18.75 12.75h4.5"
    />
  );

export default SvgDesktopComputerPc;
