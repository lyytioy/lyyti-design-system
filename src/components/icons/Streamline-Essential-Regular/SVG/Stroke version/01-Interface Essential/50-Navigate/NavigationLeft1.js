import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationLeft1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-left-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-left-1_svg__a"
      d="M17.248 18.747v-4.5a1.5 1.5 0 011.5-1.5h4.5"
    />,
    <path
      className="navigation-left-1_svg__a"
      d="M23.248 12.747a6 6 0 01-6 6h-6V22.5a.75.75 0 01-1.3.512l-8.8-9.988a1.5 1.5 0 010-2.047L9.95.987a.75.75 0 011.3.512v3.748h10.5a1.5 1.5 0 011.5 1.5z"
    />
  );

export default SvgNavigationLeft1;
