import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptop1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-1_svg__a"
      d="M17.25 11.25a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5h-12a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5M20.068 15.224a1.5 1.5 0 01-1.405 2.026H3.751a1.5 1.5 0 01-1.4-2.026l1.125-3a1.5 1.5 0 011.4-.974h12.835a1.5 1.5 0 011.4.974zM9.75 14.25h3M.75 21.75h22.5M11.25 17.25v4.5"
    />
  );

export default SvgLaptop1;
