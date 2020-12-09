import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentHarp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-harp_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-harp_svg__a"
      d="M3.5.5h3c2 0 4 2 6 2H22A1.5 1.5 0 0123.5 4a4.5 4.5 0 01-.9 2.7L11.2 21.9A4 4 0 018 23.5H3.5v-4h2a2.414 2.414 0 001.707-.707L17.793 8.207A2.414 2.414 0 0018.5 6.5a1 1 0 00-1-1h-5c-2 0-4-2-6-2h-3zM1.5.5h2v23h-2a1 1 0 01-1-1v-21a1 1 0 011-1zM6.5 3.5v15.783M9.5 4.5v12M12.5 5.5v8M15.5 5.5v5"
    />
  );

export default SvgInstrumentHarp;
