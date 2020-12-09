import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationNext = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-next_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-next_svg__a"
      d="M23 9.5H12.387a4 4 0 00-4 4v2"
    />,
    <path
      className="navigation-next_svg__a"
      d="M19 13.498l4-4-4-4M14.387 13v5.5a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1h12a1 1 0 011 1V7"
    />
  );

export default SvgNavigationNext;
