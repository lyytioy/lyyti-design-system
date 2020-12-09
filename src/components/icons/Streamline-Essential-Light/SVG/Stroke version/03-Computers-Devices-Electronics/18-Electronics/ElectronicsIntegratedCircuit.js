import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsIntegratedCircuit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-integrated-circuit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="electronics-integrated-circuit_svg__a"
      x={7}
      y={3.5}
      width={10}
      height={17}
      rx={1}
      ry={1}
    />,
    <path
      className="electronics-integrated-circuit_svg__a"
      d="M9 3.5v-3M12 3.5v-3M15 3.5v-3M17 7.5h3M17 10.5h3M17 13.5h3M17 16.5h3M15 20.5v3M12 20.5v3M9 20.5v3M7 16.5H4M7 13.5H4M7 10.5H4M7 7.5H4"
    />
  );

export default SvgElectronicsIntegratedCircuit;
