import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop_svg__a"
      d="M18 14.25H6a1.5 1.5 0 01-1.4-2.026l1.04-3a1.5 1.5 0 011.4-.974h9.921a1.5 1.5 0 011.4.974l1.04 3A1.5 1.5 0 0118 14.25zM10.501 11.25h3"
    />,
    <rect
      className="laptop_svg__a"
      x={6.001}
      y={0.75}
      width={12}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="laptop_svg__a"
      d="M.75 21.75h9.75M13.5 21.75h9.75M12 17.25v3"
    />,
    <circle className="laptop_svg__a" cx={12} cy={21.75} r={1.5} />
  );

export default SvgLaptop;
