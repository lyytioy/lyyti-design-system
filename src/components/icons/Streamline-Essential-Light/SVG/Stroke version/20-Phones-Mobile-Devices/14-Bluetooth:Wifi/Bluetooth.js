import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBluetooth = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bluetooth_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="bluetooth_svg__a"
      d="M8 8l7 7-3 3V6l3 3-7 7M6 12h2.5M.5 12H3M15.5 12H18M21 12h2.5"
    />
  );

export default SvgBluetooth;
