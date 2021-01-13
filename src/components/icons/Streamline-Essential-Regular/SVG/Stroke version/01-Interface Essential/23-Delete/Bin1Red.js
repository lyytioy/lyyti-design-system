import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBin1Red = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bin-1-red_svg__a{fill:none;stroke:#bc0011;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="bin-1-red_svg__a"
      d="M1.5 4.5h21M14.25 1.5h-4.5A1.5 1.5 0 008.25 3v1.5h7.5V3a1.5 1.5 0 00-1.5-1.5zM9.75 17.25v-7.5M14.25 17.25v-7.5M18.865 21.124A1.5 1.5 0 0117.37 22.5H6.631a1.5 1.5 0 01-1.495-1.376L3.75 4.5h16.5z"
    />
  );

export default SvgBin1Red;