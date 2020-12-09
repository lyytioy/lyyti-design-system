import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsDiode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-diode_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="electronics-diode_svg__a"
      d="M.5 12h5M7.013 19.008a.992.992 0 01-1.513-.845V5.837a.992.992 0 011.513-.845l10.015 6.163a.992.992 0 010 1.69zM17.5 12h6M17.5 4v16"
    />
  );

export default SvgElectronicsDiode;
