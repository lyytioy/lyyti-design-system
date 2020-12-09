import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopBug = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-bug_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-bug_svg__a"
      d="M20.25 18.75a3 3 0 01-6 0v-1.5a3 3 0 016 0zM14.25 17.25h6M14.515 16.015L12 13.5M15.129 20.871L12.75 23.25M14.25 18.75h-3M19.985 16.015L22.5 13.5M19.371 20.871l2.379 2.379M20.25 18.75h3M3 12V2.25A1.5 1.5 0 014.5.75h15a1.5 1.5 0 011.5 1.5v7.5M9.75 12h-9a3.75 3.75 0 003.75 3.75h3.75"
    />
  );

export default SvgLaptopBug;
