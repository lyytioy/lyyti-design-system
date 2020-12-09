import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-lock_svg__a"
      d="M12 8.625a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <rect
      className="laptop-lock_svg__a"
      x={7.5}
      y={6}
      width={9}
      height={6}
      rx={0.375}
      ry={0.375}
    />,
    <path
      className="laptop-lock_svg__a"
      d="M9 6V4.5a3 3 0 016 0V6M4.5 6A1.5 1.5 0 003 7.5v8.25h18V7.5A1.5 1.5 0 0019.5 6M23.121 20.391A1.5 1.5 0 0121.75 22.5H2.25a1.5 1.5 0 01-1.371-2.109L3 15.75h18zM10.5 19.5h3"
    />
  );

export default SvgLaptopLock;
