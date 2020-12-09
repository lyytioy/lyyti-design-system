import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentDrums = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-drums_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-drums_svg__a"
      d="M22 8.5H2a1.5 1.5 0 000 3h20a1.5 1.5 0 000-3zM22 20.5H2a1.5 1.5 0 000 3h20a1.5 1.5 0 000-3zM2.5 11.5h19v9h-19z"
    />,
    <path
      className="instrument-drums_svg__a"
      d="M21.5 11.5l-4.75 9-4.75-9-4.75 9-4.75-9"
    />,
    <circle className="instrument-drums_svg__a" cx={9} cy={4.5} r={2} />,
    <path className="instrument-drums_svg__a" d="M.5.5l6.69 3.148" />,
    <circle className="instrument-drums_svg__a" cx={15} cy={4.5} r={2} />,
    <path className="instrument-drums_svg__a" d="M23.5.5l-6.69 3.148" />
  );

export default SvgInstrumentDrums;
