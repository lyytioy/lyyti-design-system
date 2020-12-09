import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellularNetwork3G = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cellular-network-3g_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cellular-network-3g_svg__a"
      d="M4.5 4.25l3-3 3 3M7.5 1.25v10M19.5 8.25l-3 3-3-3M16.5 11.25v-10M18.5 16.75a2 2 0 00-4 0v4a2 2 0 004 0v-1H17M5.5 14.75h3a2 2 0 010 4 2 2 0 010 4h-3M7 18.75h1.5"
    />
  );

export default SvgCellularNetwork3G;
