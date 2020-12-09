import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellularNetworkLte = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cellular-network-lte_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cellular-network-lte_svg__a"
      d="M5.363 4.5l3-3 3 3M8.363 1.5v9.75M18.863 8.25l-3 3-3-3M15.863 11.25V1.5M11.363 22.5V15M9.863 15h3M5.363 15v6a1.5 1.5 0 001.5 1.5h1.5M18.863 22.5h-1.5a1.5 1.5 0 01-1.5-1.5v-4.5a1.5 1.5 0 011.5-1.5h1.5M15.863 19.5h3"
    />
  );

export default SvgCellularNetworkLte;
