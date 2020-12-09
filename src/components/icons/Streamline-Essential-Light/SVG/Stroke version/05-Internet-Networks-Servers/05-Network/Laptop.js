import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop_svg__a"
      d="M21.5 18.5H1.981a1 1 0 01-.864-1.5l2.333-4a1 1 0 01.864-.5h14.851a1 1 0 01.864.5l2.333 4a1 1 0 01-.862 1.5z"
    />,
    <rect
      className="laptop_svg__a"
      x={3.5}
      y={0.5}
      width={16}
      height={12}
      rx={1}
      ry={1}
    />,
    <path className="laptop_svg__a" d="M.5 23.5h23M11.5 18.5v5M10 16.5h3" />
  );

export default SvgLaptop;
