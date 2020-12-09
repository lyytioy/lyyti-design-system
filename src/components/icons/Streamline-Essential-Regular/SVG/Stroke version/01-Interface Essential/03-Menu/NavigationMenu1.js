import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationMenu1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-menu-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="navigation-menu-1_svg__a"
      x={0.75}
      y={0.753}
      width={22.5}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="navigation-menu-1_svg__a"
      x={0.75}
      y={9.753}
      width={22.5}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="navigation-menu-1_svg__a"
      x={0.75}
      y={18.753}
      width={22.5}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgNavigationMenu1;
