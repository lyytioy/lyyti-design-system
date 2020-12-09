import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPl1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pl-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="pl-1_svg__a"
      d="M1.499 3.754h21M1.499 20.254h21M13.5 8.254V10.5a1.5 1.5 0 003 0V8.254M14.999 12.004v3.75M7.499 15.754v-7.5M7.5 8.254h.75a2.25 2.25 0 010 4.5H7.5"
    />
  );

export default SvgPl1;
