import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCPlusPlus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".c-plus-plus_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="c-plus-plus_svg__a"
      d="M.738 3.754h22.5M.738 20.254h22.5M5.238 8.254a3 3 0 00-3 3v1.5a3 3 0 003 3M8.238 12.754h6M11.238 15.754v-6M17.238 12.754h6M20.238 15.754v-6"
    />
  );

export default SvgCPlusPlus;
