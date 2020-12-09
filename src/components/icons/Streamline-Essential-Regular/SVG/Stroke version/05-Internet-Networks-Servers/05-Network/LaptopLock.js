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
      d="M5.25 12.75a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h7.5M20.068 16.724a1.5 1.5 0 01-1.405 2.026H3.751a1.5 1.5 0 01-1.4-2.026l1.125-3a1.5 1.5 0 011.4-.974h12.835a1.5 1.5 0 011.4.974zM9.75 15.75h3"
    />,
    <rect
      className="laptop-lock_svg__a"
      x={15.75}
      y={3.75}
      width={7.5}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="laptop-lock_svg__a"
      d="M19.5 6.375a.375.375 0 10.375.375.375.375 0 00-.375-.375M.75 23.25h22.5M11.25 18.75v4.5M17.25 3.75V3a2.25 2.25 0 014.5 0v.75"
    />
  );

export default SvgLaptopLock;
