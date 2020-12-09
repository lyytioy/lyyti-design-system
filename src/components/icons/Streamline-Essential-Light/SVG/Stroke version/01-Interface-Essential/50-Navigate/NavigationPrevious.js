import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationPrevious = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-previous_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-previous_svg__a"
      d="M.887 9.5H11.5a4 4 0 014 4v2"
    />,
    <path
      className="navigation-previous_svg__a"
      d="M4.887 13.498l-4-4 4-4M9.5 13v5.5a1 1 0 001 1h12a1 1 0 001-1v-12a1 1 0 00-1-1h-12a1 1 0 00-1 1V7"
    />
  );

export default SvgNavigationPrevious;
