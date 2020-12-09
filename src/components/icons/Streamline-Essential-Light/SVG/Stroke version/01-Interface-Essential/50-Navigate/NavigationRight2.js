import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationRight2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-right-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-right-2_svg__a"
      d="M12 23.5l7.429-10.68a1.547 1.547 0 000-1.641L12 .5"
    />,
    <path
      className="navigation-right-2_svg__a"
      d="M5 23.5c-.55 0-.743-.37-.429-.821l6.858-9.859a1.547 1.547 0 000-1.641L4.571 1.318C4.257.867 4.45.5 5 .5h1.5a2.152 2.152 0 011.571.82l6.858 9.859a1.547 1.547 0 010 1.641l-6.858 9.857A2.153 2.153 0 016.5 23.5z"
    />
  );

export default SvgNavigationRight2;
