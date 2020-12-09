import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellularNetworkLte = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cellular-network-lte_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cellular-network-lte_svg__a"
      d="M4.001 4.25l3-3 3 3M7.001 1.25v10M19.001 8.25l-3 3-3-3M16.001 11.25v-10M5 14.75v6.5a1.5 1.5 0 001.5 1.5H9M20 22.75h-2.5a1.5 1.5 0 01-1.5-1.5v-5a1.5 1.5 0 011.5-1.5H20M15.999 18.75h2.5M9.999 14.75h4M11.999 14.75v8"
    />
  );

export default SvgCellularNetworkLte;
