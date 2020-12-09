import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationMenu3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-menu-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="navigation-menu-3_svg__a"
      cx={12}
      cy={12.003}
      r={11.25}
    />,
    <path
      className="navigation-menu-3_svg__a"
      d="M7.5 8.253h9M7.5 12.003h9M7.5 15.753h9"
    />
  );

export default SvgNavigationMenu3;
