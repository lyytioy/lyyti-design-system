import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopLock1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-lock-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-lock-1_svg__a"
      d="M20.25 5.25a1.5 1.5 0 011.5 1.5v10.5M2.25 17.25V6.75a1.5 1.5 0 011.5-1.5M14.584 17.25a2.976 2.976 0 01-5.168 0H.75v1.5a3 3 0 003 3h16.5a3 3 0 003-3v-1.5zM12 9.375a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <rect
      className="laptop-lock-1_svg__a"
      x={7.5}
      y={6.75}
      width={9}
      height={6}
      rx={0.375}
      ry={0.375}
    />,
    <path className="laptop-lock-1_svg__a" d="M9 6.75v-1.5a3 3 0 016 0v1.5" />
  );

export default SvgLaptopLock1;
