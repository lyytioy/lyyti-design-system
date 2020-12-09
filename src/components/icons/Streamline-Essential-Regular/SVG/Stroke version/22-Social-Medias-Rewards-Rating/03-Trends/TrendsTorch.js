import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTrendsTorch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".trends-torch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="trends-torch_svg__a"
      d="M11.738 14.25c-6.477 0-6.194-9-1.664-9-.485 2.249 1.248 2.7 1.248 2.7s4.053-2.7-.832-7.2c7.646 0 10.7 13.5 1.248 13.5zM12 23.25a2.25 2.25 0 01-2.077-1.385L6.75 14.25h10.5l-3.173 7.615A2.25 2.25 0 0112 23.25zM5.25 14.25h13.5"
    />
  );

export default SvgTrendsTorch;
