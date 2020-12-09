import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentClassicalPiano = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-classical-piano_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="instrument-classical-piano_svg__a"
      d="M2.25 20.183h19.5a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 00-1.5-1.5h-15a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 01-1.5 1.5h-1.5a1.5 1.5 0 00-1.5 1.5v1.5a1.5 1.5 0 001.5 1.5z"
    />,
    <path
      className="instrument-classical-piano_svg__a"
      d="M6.75 12.683l3.8-10.892a1.5 1.5 0 012.3-.673l.546.409A3 3 0 0114.508 3.2l.292 1.168a1.5 1.5 0 00.981 1.059l1.427.476c.028.009.056.019.083.03 2.3.921 3.958 3.744 4.366 6.19l.093.56M14.25 12.683L12 8.933M5.25 20.183v3M20.25 20.183v3"
    />
  );

export default SvgInstrumentClassicalPiano;
