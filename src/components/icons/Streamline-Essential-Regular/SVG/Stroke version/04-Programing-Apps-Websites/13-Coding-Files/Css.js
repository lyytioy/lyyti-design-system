import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCss = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".css_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="css_svg__a"
      d="M1.488 3.754h21M1.488 20.254h21M7.488 8.254a3 3 0 00-3 3v1.5a3 3 0 003 3M13.488 8.254h-1.5a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5a1.5 1.5 0 01-1.5 1.5h-1.5M19.488 8.254h-1.5a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5a1.5 1.5 0 01-1.5 1.5h-1.5"
    />
  );

export default SvgCss;
