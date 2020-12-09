import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationMenuHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-menu-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="navigation-menu-horizontal_svg__a"
      cx={3.375}
      cy={12.023}
      r={2.625}
    />,
    <circle
      className="navigation-menu-horizontal_svg__a"
      cx={20.625}
      cy={12.023}
      r={2.625}
    />,
    <circle
      className="navigation-menu-horizontal_svg__a"
      cx={12}
      cy={12.023}
      r={2.625}
    />
  );

export default SvgNavigationMenuHorizontal;
