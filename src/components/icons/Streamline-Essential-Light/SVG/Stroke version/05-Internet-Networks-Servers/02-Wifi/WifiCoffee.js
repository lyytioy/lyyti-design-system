import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiCoffee = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-coffee_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-coffee_svg__a"
      d="M10.8 23.565a4 4 0 01-4-4v-6h10v6a4 4 0 01-4 4zM16.8 14.565h1.5a2.5 2.5 0 010 5h-1.5M5.472 7.694a8.944 8.944 0 0112.652 0M20.655 4.268a12.524 12.524 0 00-17.715 0M8 11.119a5.37 5.37 0 017.594 0M18.124 7.694a8.944 8.944 0 00-12.652 0M15.6 11.119a5.37 5.37 0 00-7.594 0"
    />
  );

export default SvgWifiCoffee;
