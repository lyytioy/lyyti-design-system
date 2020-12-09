import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsVariableCapacitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-variable-capacitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="electronics-variable-capacitor_svg__a"
      d="M12 23.5v-10M3.5 13.5h17M12 .5v10M3.5 10.5h17M4.5 4.5l14 14M8 4.5H4.5V8"
    />
  );

export default SvgElectronicsVariableCapacitor;
