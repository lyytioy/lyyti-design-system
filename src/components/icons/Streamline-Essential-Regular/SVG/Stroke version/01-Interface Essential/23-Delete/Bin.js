import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="bin_svg__a"
      d="M17.25 21H6.75a1.5 1.5 0 01-1.5-1.5V6h13.5v13.5a1.5 1.5 0 01-1.5 1.5zM9.75 16.5v-6M14.25 16.5v-6M2.25 6h19.5M14.25 3h-4.5a1.5 1.5 0 00-1.5 1.5V6h7.5V4.5a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgBin;
