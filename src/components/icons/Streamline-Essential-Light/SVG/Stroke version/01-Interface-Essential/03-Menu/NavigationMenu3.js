import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationMenu3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-menu-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-menu-3_svg__a"
      d="M17.25 8H6.75M17.25 12H6.75M17.25 16H6.75"
    />,
    <circle className="navigation-menu-3_svg__a" cx={12} cy={12} r={11.5} />
  );

export default SvgNavigationMenu3;
