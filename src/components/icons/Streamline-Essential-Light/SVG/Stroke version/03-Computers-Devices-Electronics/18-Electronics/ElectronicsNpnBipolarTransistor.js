import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsNpnBipolarTransistor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-NPN-bipolar-transistor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="electronics-NPN-bipolar-transistor_svg__a"
      cx={13}
      cy={12}
      r={10.5}
    />,
    <path
      className="electronics-NPN-bipolar-transistor_svg__a"
      d="M.5 12h9M9.5 6.5v11M9.5 11l8-5V.5M9.5 13l8 5v5.5"
    />,
    <path
      className="electronics-NPN-bipolar-transistor_svg__a"
      d="M13.542 18l2.958-.5-.5-2.958"
    />
  );

export default SvgElectronicsNpnBipolarTransistor;
