import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationNext = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-next_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-next_svg__a"
      d="M23.251 9.747H12a3.75 3.75 0 00-3.75 3.75"
    />,
    <path
      className="navigation-next_svg__a"
      d="M20.251 6.747l3 3-3 3M17.251 5.247a1.5 1.5 0 00-1.5-1.5h-13.5a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-4.5"
    />
  );

export default SvgNavigationNext;
