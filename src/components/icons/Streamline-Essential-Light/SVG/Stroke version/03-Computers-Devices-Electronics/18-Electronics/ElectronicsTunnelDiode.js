import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsTunnelDiode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-tunnel-diode_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="electronics-tunnel-diode_svg__a"
      d="M15.5 3.75h2v17h-2M.5 12.25h5"
    />,
    <path
      className="electronics-tunnel-diode_svg__a"
      d="M7.013 19.258a.992.992 0 01-1.513-.845V6.087a.992.992 0 011.513-.845l10.015 6.163a.992.992 0 010 1.69zM17.5 12.25h6"
    />
  );

export default SvgElectronicsTunnelDiode;
