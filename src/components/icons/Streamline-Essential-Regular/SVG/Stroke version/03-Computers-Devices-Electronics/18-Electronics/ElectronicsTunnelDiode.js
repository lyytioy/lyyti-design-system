import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsTunnelDiode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-tunnel-diode_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="electronics-tunnel-diode_svg__a"
      d="M.75 12h4.5M18.75 12h4.5M15.75 3.75h3v16.5h-3"
    />,
    <path
      className="electronics-tunnel-diode_svg__a"
      d="M18.75 12L6.391 19.553a.75.75 0 01-1.141-.64V5.087a.75.75 0 011.141-.64z"
    />
  );

export default SvgElectronicsTunnelDiode;
