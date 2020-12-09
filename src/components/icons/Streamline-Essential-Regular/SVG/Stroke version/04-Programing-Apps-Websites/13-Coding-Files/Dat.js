import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".dat_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="dat_svg__a"
      d="M1.738 3.754h21M1.738 20.254h21M4.738 15.754a3 3 0 003-3v-1.5a3 3 0 00-3-3zM10.738 15.754v-6a1.5 1.5 0 113 0v6M10.738 12.754h3M18.238 15.754v-7.5M16.738 8.254h3"
    />
  );

export default SvgDat;
