import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationMenuHorizontal2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-menu-horizontal-2_svg__b{fill:none;stroke:currentColor;stroke-width:1.5px;stroke-miterlimit:10}"
        }
      </style>
    </defs>,
    <rect
      x={0.75}
      y={0.753}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    />,
    <path
      className="navigation-menu-horizontal-2_svg__b"
      d="M6 10.5A1.5 1.5 0 107.5 12 1.5 1.5 0 006 10.5zM18 10.5a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5zM12 10.5a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgNavigationMenuHorizontal2;
