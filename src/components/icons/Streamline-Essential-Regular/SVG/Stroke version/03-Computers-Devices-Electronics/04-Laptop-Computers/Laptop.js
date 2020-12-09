import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop_svg__a"
      d="M21 14.25V4.5A1.5 1.5 0 0019.5 3h-15A1.5 1.5 0 003 4.5v9.75zM23.121 18.891A1.5 1.5 0 0121.75 21H2.25a1.5 1.5 0 01-1.371-2.109L3 14.25h18zM10.5 18h3"
    />
  );

export default SvgLaptop;
