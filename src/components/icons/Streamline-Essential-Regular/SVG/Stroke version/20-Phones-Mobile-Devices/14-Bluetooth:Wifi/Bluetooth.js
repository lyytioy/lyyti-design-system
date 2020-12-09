import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBluetooth = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bluetooth_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="bluetooth_svg__a"
      d="M8.25 15l7.5-6L12 6v12l3.75-3-7.5-6M.75 12h1.5M5.25 12h1.5M17.25 12h1.5M21.75 12h1.5"
    />
  );

export default SvgBluetooth;
