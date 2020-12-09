import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrochipBoard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microchip-board_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="microchip-board_svg__a"
      d="M18.75.75v1.5h-4.5V.75H3.75a3 3 0 00-3 3V15h1.5v3H.75v2.25a3 3 0 003 3h16.5a3 3 0 003-3V3.75a3 3 0 00-3-3zM18.75 15H21M18.75 12H21M7.5 15h2.25M7.5 12h2.25M15.75 18v2.25M12.75 18v2.25M15.75 6.75V9M12.75 6.75V9"
    />,
    <rect
      className="microchip-board_svg__a"
      x={9.75}
      y={9}
      width={9}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path className="microchip-board_svg__a" d="M3.75 3.75v3M6.75 3.75v3" />
  );

export default SvgMicrochipBoard;
