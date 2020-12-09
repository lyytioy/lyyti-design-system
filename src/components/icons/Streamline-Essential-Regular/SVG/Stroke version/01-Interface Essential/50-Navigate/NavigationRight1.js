import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationRight1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-right-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-right-1_svg__a"
      d="M6.748 5.249v4.5a1.5 1.5 0 01-1.5 1.5h-4.5"
    />,
    <path
      className="navigation-right-1_svg__a"
      d="M.748 11.249a6 6 0 016-6h6V1.5a.75.75 0 011.3-.512l8.8 9.988a1.5 1.5 0 010 2.047l-8.8 9.987a.75.75 0 01-1.3-.512v-3.749h-10.5a1.5 1.5 0 01-1.5-1.5z"
    />
  );

export default SvgNavigationRight1;
