import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsVariableCapacitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-variable-capacitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="electronics-variable-capacitor_svg__a"
      d="M12 .75v9M12 14.25v9M2.25 14.25h19.5M2.25 9.75h19.5M2.25 2.25l18 18M2.25 6V2.25H6"
    />
  );

export default SvgElectronicsVariableCapacitor;
