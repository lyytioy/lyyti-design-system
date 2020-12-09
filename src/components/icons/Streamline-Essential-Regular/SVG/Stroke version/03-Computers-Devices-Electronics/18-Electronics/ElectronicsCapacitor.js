import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsCapacitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-capacitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="electronics-capacitor_svg__a"
      d="M17.25 18.75H6.75V2.25a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5zM5.25 14.25h13.5M9.75 18.75v4.5M14.25 18.75v4.5"
    />
  );

export default SvgElectronicsCapacitor;
