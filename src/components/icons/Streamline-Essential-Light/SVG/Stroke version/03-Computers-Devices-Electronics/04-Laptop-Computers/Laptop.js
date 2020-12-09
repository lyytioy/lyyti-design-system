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
    <rect
      className="laptop_svg__a"
      x={3.5}
      y={1}
      width={17}
      height={12}
      rx={2}
      ry={2}
    />,
    <path
      className="laptop_svg__a"
      d="M23.427 21.293A1.281 1.281 0 0122.219 23H1.781a1.281 1.281 0 01-1.208-1.707l2.261-6.407A2.827 2.827 0 015.5 13h13a2.825 2.825 0 012.665 1.886z"
    />,
    <path
      className="laptop_svg__a"
      d="M15.5 23h-7l1-3h5l1 3zM5.495 16h1M8.495 16h1M14.495 16h1M17.495 16h1M11.495 16h1M4.495 18h1M7.495 18h9M18.495 18h1"
    />
  );

export default SvgLaptop;
