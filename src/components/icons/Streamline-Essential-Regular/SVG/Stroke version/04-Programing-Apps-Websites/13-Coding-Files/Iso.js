import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIso = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iso_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="iso_svg__a"
      d="M1.502 3.753h21M1.502 20.253h21M6.002 15.753v-7.5M12 8.253h-1.5a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5a1.5 1.5 0 01-1.5 1.5H9M16.5 8.253a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 003 0v-4.5a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgIso;
