import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationMenuHorizontal2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-menu-horizontal-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="navigation-menu-horizontal-2_svg__a"
      cx={7}
      cy={12}
      r={1.25}
    />,
    <circle
      className="navigation-menu-horizontal-2_svg__a"
      cx={12}
      cy={12}
      r={1.25}
    />,
    <circle
      className="navigation-menu-horizontal-2_svg__a"
      cx={17}
      cy={12}
      r={1.25}
    />,
    <rect
      className="navigation-menu-horizontal-2_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={2}
      ry={2}
    />
  );

export default SvgNavigationMenuHorizontal2;
