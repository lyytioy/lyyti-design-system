import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBluetoothOn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bluetooth-on_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="bluetooth-on_svg__a"
      d="M13.494 9.359a5.255 5.255 0 01.027 5.386M16.637 6.012a9.751 9.751 0 01.112 11.979M20.115 3.155A14.252 14.252 0 0120.108 21M.75 6L12 17.25 6.75 22.5v-21L12 6.75.75 18"
    />
  );

export default SvgBluetoothOn;
