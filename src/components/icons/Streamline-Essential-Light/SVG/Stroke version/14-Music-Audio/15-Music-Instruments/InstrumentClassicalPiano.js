import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentClassicalPiano = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-classical-piano_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-classical-piano_svg__a"
      d="M23.5 14.454a1 1 0 00-1-1h-16a1 1 0 00-1 1v2h-4a1 1 0 00-1 1v2a1 1 0 001 1h21a1 1 0 001-1zM21.5 20.454v3M4.5 20.454v3M6.5 13.454L10.735 1.22A1 1 0 0111.95.584a3.5 3.5 0 012.55 3.37 2.5 2.5 0 002.5 2.5 5.5 5.5 0 015.5 5.5v1.5M11.5 7.954l3.5 5.5"
    />
  );

export default SvgInstrumentClassicalPiano;
