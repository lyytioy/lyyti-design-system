import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationMenu4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-menu-4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="navigation-menu-4_svg__a"
      x={0.75}
      y={0.753}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="navigation-menu-4_svg__a"
      d="M6.75 7.503h10.5M6.75 12.003h10.5M6.75 16.503h10.5"
    />
  );

export default SvgNavigationMenu4;
