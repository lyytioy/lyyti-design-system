import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsIntegratedCircuit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-integrated-circuit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="electronics-integrated-circuit_svg__a"
      d="M3.75 8.25h3M3.75 12h3M3.75 15.75h3M17.25 8.25h3M17.25 12h3M17.25 15.75h3M9.75 3.75v-3M14.25 3.75v-3M9.75 23.25v-3M14.25 23.25v-3"
    />,
    <rect
      className="electronics-integrated-circuit_svg__a"
      x={6.75}
      y={3.75}
      width={10.5}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgElectronicsIntegratedCircuit;
