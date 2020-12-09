import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationMenuHorizontal1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-menu-horizontal-1_svg__a{fill:none;stroke:currentColor;stroke-width:1.5px;stroke-miterlimit:10}"
        }
      </style>
    </defs>,
    <path
      className="navigation-menu-horizontal-1_svg__a"
      d="M6 10.5A1.5 1.5 0 107.5 12 1.5 1.5 0 006 10.5zM18 10.5a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5zM12 10.5a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5z"
    />,
    <circle
      cx={12}
      cy={12.003}
      r={11.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    />
  );

export default SvgNavigationMenuHorizontal1;
