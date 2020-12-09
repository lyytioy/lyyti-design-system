import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsZenerDiode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-zener-diode_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="electronics-zener-diode_svg__a"
      d="M.5 12.5h5M7.013 19.508a.992.992 0 01-1.513-.845V6.337a.992.992 0 011.513-.845l10.015 6.163a.992.992 0 010 1.69zM17.5 12.5h6"
    />,
    <path
      className="electronics-zener-diode_svg__a"
      d="M19.5 20.5l-2-2v-12l-2-2"
    />
  );

export default SvgElectronicsZenerDiode;
