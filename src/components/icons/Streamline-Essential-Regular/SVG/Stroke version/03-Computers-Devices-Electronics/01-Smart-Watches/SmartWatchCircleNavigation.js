import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleNavigation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-navigation_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-navigation_svg__a"
      d="M15.033 15a6.751 6.751 0 11-6.048-9.75M4.485 6.97V2.25a1.5 1.5 0 011.5-1.5h4.5"
    />,
    <path
      className="smart-watch-circle-navigation_svg__a"
      d="M13.485 17.03v4.72a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-4.72M21.75 5.947l-9.015-3.713 3.712 9.016 1.591-3.712 3.712-1.591z"
    />
  );

export default SvgSmartWatchCircleNavigation;
