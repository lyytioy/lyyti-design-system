import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentPiano = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-piano_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="instrument-piano_svg__a"
      d="M18.75 8.25h4.5M.75 8.25h4.5M2.25 8.25v7.25a.988.988 0 00.975 1h17.55a.988.988 0 00.975-1V8.25M2.25 13.5h19.5M3 16.472v6.778M21 16.473v6.777M12 19.5v3.75M10.5 23.25h3M16.5.75l4.5 7.5"
    />,
    <path
      className="instrument-piano_svg__a"
      d="M8.75 4.5h6.5a.5.5 0 01.5.5v8.5h-7.5V5a.5.5 0 01.5-.5zM11.25 7.5h1.5M11.25 10.5h1.5M9.75 19.5h4.5"
    />
  );

export default SvgInstrumentPiano;
