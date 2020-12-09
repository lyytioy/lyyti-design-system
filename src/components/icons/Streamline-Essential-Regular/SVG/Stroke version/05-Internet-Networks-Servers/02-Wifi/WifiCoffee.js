import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiCoffee = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-coffee_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wifi-coffee_svg__a"
      d="M16.5 20.25a3 3 0 01-3 3h-3a3 3 0 01-3-3v-6h9zM16.5 14.25H18a3 3 0 010 6h-1.5M8.294 11.284a5.25 5.25 0 017.417 0M5.4 7.822a9.75 9.75 0 0113.165-.029M3 3.954a14.25 14.25 0 0118 0"
    />
  );

export default SvgWifiCoffee;
