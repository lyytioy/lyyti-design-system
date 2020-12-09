import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsCrystalDiode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-crystal-diode_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="electronics-crystal-diode_svg__a"
      d="M8.128 11.634a3 3 0 004.243 4.243l4.242-4.243a3 3 0 10-4.242-4.242zM8.878 10.884l4.243 4.243M13.121 10.884l9.75-9.75M8.128 15.877l-7.007 7.007"
    />
  );

export default SvgElectronicsCrystalDiode;
