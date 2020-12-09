import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiLaptop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-laptop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="wifi-laptop_svg__a"
      x={3.75}
      y={1.5}
      width={16.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="wifi-laptop_svg__a"
      d="M18.571 15a3 3 0 012.683 1.659l1.836 3.67a1.5 1.5 0 01-1.342 2.171H2.252A1.5 1.5 0 01.91 20.329l1.836-3.67A3 3 0 015.429 15zM9.75 19.5h4.5M11.967 11.234a.375.375 0 10.375.375.375.375 0 00-.375-.375M8.682 8.464a6.006 6.006 0 016.57 0M17.075 6.094a8.982 8.982 0 00-10.216 0"
    />
  );

export default SvgWifiLaptop;
