import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellularNetwork3G = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cellular-network-3g_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cellular-network-3g_svg__a"
      d="M6.863 16.5a1.5 1.5 0 011.5-1.5l1.135.005a1.873 1.873 0 01-.008 3.745 1.873 1.873 0 01.01 3.75H8.365a1.5 1.5 0 01-1.5-1.5M5.363 4.5l3-3 3 3M8.363 1.5v9.75M18.863 8.25l-3 3-3-3M15.863 11.25V1.5M18.113 15h-1.5a2.251 2.251 0 00-2.25 2.25v3a2.25 2.25 0 002.25 2.25 2.25 2.25 0 002.25-2.25v-.75h-1.5"
    />
  );

export default SvgCellularNetwork3G;
