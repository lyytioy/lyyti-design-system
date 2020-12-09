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
      d="M1.488 3.754h21M1.488 20.254h21M5.988 15.754v-7.5M5.988 8.254h1.5a1.5 1.5 0 011.5 1.5v.75a1.5 1.5 0 01-1.5 1.5h-1.5"
    />,
    <path
      className="bin_svg__a"
      d="M5.988 12h1.5a1.5 1.5 0 011.5 1.5v.75a1.5 1.5 0 01-1.5 1.5h-1.5M11.988 15.754v-7.5M14.988 15.754v-7.5l3 7.5v-7.5"
    />
  );

export default SvgBin;
