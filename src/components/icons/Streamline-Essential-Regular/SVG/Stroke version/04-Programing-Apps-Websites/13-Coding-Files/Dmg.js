import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDmg = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".dmg_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="dmg_svg__a"
      d="M.738 3.754h22.5M.738 20.254h22.5M19.488 12.754h.75v1.5a1.5 1.5 0 01-3 0v-4.5a1.5 1.5 0 011.5-1.5h1.5M14.238 15.754v-7.5l-2.25 3.75-2.25-3.75v7.5M3.738 15.754a3 3 0 003-3v-1.5a3 3 0 00-3-3z"
    />
  );

export default SvgDmg;
