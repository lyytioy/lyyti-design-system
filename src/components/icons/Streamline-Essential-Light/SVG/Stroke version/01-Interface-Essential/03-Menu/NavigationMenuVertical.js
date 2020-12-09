import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationMenuVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-menu-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="navigation-menu-vertical_svg__a"
      cx={12}
      cy={3}
      r={2.5}
    />,
    <circle
      className="navigation-menu-vertical_svg__a"
      cx={12}
      cy={12}
      r={2.5}
    />,
    <circle
      className="navigation-menu-vertical_svg__a"
      cx={12}
      cy={21}
      r={2.5}
    />
  );

export default SvgNavigationMenuVertical;
