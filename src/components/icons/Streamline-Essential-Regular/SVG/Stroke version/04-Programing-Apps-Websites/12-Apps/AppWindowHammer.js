import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowHammer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-hammer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-hammer_svg__a"
      x={1.51}
      y={2.253}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="app-window-hammer_svg__a" d="M1.51 6.753h21" />,
    <rect
      className="app-window-hammer_svg__a"
      x={8.078}
      y={11.382}
      width={6.364}
      height={4.243}
      rx={0.75}
      ry={0.75}
      transform="rotate(-45 11.26 13.503)"
    />,
    <path className="app-window-hammer_svg__a" d="M12.76 15.003l3.75 3.75" />
  );

export default SvgAppWindowHammer;
