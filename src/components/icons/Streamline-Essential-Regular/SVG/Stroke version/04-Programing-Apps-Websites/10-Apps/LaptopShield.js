import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-shield_svg__a"
      d="M22.371 19.228A1.226 1.226 0 0121.273 21H2.727a1.225 1.225 0 01-1.1-1.775L3 15h18zM19.5 3A1.5 1.5 0 0121 4.5V15H3.006V4.5a1.5 1.5 0 011.5-1.5M11.25 18.001h1.5"
    />,
    <path
      className="laptop-shield_svg__a"
      d="M16.5 6.378A5.75 5.75 0 0112 12a5.751 5.751 0 01-4.5-5.622v-2.25A1.125 1.125 0 018.625 3h6.75A1.125 1.125 0 0116.5 4.128z"
    />
  );

export default SvgLaptopShield;
