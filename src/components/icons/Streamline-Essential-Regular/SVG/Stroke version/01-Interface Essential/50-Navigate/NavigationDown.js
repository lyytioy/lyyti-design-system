import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-down_svg__a"
      d="M18.751 6.747h-4.5a1.5 1.5 0 01-1.5-1.5v-4.5"
    />,
    <path
      className="navigation-down_svg__a"
      d="M12.751.747a6 6 0 016 6v6H22.5a.75.75 0 01.511 1.3l-9.988 8.8a1.5 1.5 0 01-2.047 0L.99 14.045a.75.75 0 01.512-1.3h3.749V2.247a1.5 1.5 0 011.5-1.5z"
    />
  );

export default SvgNavigationDown;
