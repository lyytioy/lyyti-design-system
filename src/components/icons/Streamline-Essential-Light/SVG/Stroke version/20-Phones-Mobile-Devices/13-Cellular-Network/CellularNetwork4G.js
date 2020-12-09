import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellularNetwork4G = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cellular-network-4g_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cellular-network-4g_svg__a"
      d="M4.5 4.25l3-3 3 3M7.5 1.25v10M19.5 8.25l-3 3-3-3M16.5 11.25v-10M10.5 22.75v-8a5 5 0 00-5 5v1h5M18.5 16.75a2 2 0 00-4 0v4a2 2 0 004 0v-1H17"
    />
  );

export default SvgCellularNetwork4G;
