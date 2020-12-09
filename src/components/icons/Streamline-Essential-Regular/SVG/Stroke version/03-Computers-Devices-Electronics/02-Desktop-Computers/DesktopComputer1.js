import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopComputer1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-computer-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="desktop-computer-1_svg__a"
      x={0.75}
      y={4.5}
      width={15}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="desktop-computer-1_svg__a"
      d="M18.75 7.5h1.5l1.5-1.5a1.5 1.5 0 011.5 1.5V18a1.5 1.5 0 01-1.5 1.5l-1.5-1.5h-1.5M8.25 16.5v3M5.25 19.5h6M20.25 10.5h-1.5M20.25 13.5h-1.5"
    />
  );

export default SvgDesktopComputer1;
