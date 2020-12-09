import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgJs = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".js_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="js_svg__a"
      d="M1.491 3.754h21M1.491 20.254h21M10.491 8.254v6a1.5 1.5 0 01-1.5 1.5h-1.5M16.491 8.254h-1.5a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5a1.5 1.5 0 01-1.5 1.5h-1.5"
    />
  );

export default SvgJs;
