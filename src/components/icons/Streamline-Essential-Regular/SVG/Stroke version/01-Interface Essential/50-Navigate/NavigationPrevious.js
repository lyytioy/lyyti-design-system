import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationPrevious = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-previous_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-previous_svg__a"
      d="M.751 9.747H12a3.75 3.75 0 013.75 3.75"
    />,
    <path
      className="navigation-previous_svg__a"
      d="M3.751 6.747l-3 3 3 3M6.751 5.247a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v13.5a1.5 1.5 0 01-1.5 1.5h-13.5a1.5 1.5 0 01-1.5-1.5v-4.5"
    />
  );

export default SvgNavigationPrevious;
