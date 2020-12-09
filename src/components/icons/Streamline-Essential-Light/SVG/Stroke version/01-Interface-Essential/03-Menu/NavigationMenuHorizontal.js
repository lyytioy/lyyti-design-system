import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationMenuHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-menu-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="navigation-menu-horizontal_svg__a"
      cx={3}
      cy={12}
      r={2.5}
    />,
    <circle
      className="navigation-menu-horizontal_svg__a"
      cx={12}
      cy={12}
      r={2.5}
    />,
    <circle
      className="navigation-menu-horizontal_svg__a"
      cx={21}
      cy={12}
      r={2.5}
    />
  );

export default SvgNavigationMenuHorizontal;
