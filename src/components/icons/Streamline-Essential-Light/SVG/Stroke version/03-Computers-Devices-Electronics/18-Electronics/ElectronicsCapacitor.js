import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsCapacitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-capacitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="electronics-capacitor_svg__a"
      d="M7.5.5h9a1 1 0 011 1v15h-11v-15a1 1 0 011-1zM5.5 13.5h13M8.5 16.5v7M15.5 16.5v7"
    />
  );

export default SvgElectronicsCapacitor;
