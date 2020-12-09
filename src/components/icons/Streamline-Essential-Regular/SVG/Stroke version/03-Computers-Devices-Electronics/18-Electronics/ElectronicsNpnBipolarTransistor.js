import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsNpnBipolarTransistor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-NPN-bipolar-transistor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="electronics-NPN-bipolar-transistor_svg__a"
      cx={12.75}
      cy={12}
      r={9.75}
    />,
    <path
      className="electronics-NPN-bipolar-transistor_svg__a"
      d="M1.5 12h9M10.5 8.25v7.5M10.5 11.25l7.5-3V.75M18 15.75v7.5M10.5 12.75l5.598 2.239M15 12l1.098 2.989-2.574 1.511"
    />
  );

export default SvgElectronicsNpnBipolarTransistor;
