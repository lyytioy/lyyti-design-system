import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExe = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".exe_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="exe_svg__a"
      d="M1.491 3.754h21M1.491 20.254h21M7.491 15.754h-1.5a1.5 1.5 0 01-1.5-1.5v-4.5a1.5 1.5 0 011.5-1.5h1.5M4.491 12.754h3M19.491 15.754h-1.5a1.5 1.5 0 01-1.5-1.5v-4.5a1.5 1.5 0 011.5-1.5h1.5M16.491 12.754h3M10.491 8.254l3 7.5M13.491 8.254l-3 7.5"
    />
  );

export default SvgExe;
