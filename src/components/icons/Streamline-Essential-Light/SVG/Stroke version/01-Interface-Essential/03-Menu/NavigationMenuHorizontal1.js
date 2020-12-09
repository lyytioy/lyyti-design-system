import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationMenuHorizontal1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-menu-horizontal-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="navigation-menu-horizontal-1_svg__a"
      cx={7}
      cy={12}
      r={1.25}
    />,
    <circle
      className="navigation-menu-horizontal-1_svg__a"
      cx={12}
      cy={12}
      r={1.25}
    />,
    <circle
      className="navigation-menu-horizontal-1_svg__a"
      cx={17}
      cy={12}
      r={1.25}
    />,
    <circle
      className="navigation-menu-horizontal-1_svg__a"
      cx={12}
      cy={12}
      r={11.5}
    />
  );

export default SvgNavigationMenuHorizontal1;
