import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentDholak = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-dholak_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-dholak_svg__a"
      d="M18.5 1.5a1 1 0 00-1-1h-11a1 1 0 00-1 1 2 2 0 002 2h9a2 2 0 002-2z"
    />,
    <path
      className="instrument-dholak_svg__a"
      d="M6.509 3.237L6.5 3.5s-.4 12.086 4 14l-1.923 4.615A1 1 0 009.5 23.5h5a1 1 0 00.923-1.385L13.5 17.5c4.4-1.914 4-14 4-14l-.009-.263M10.5 17.5h3"
    />,
    <path
      className="instrument-dholak_svg__a"
      d="M9.467 19.98L12 21.5l2.533-1.52M6.815 9.5L9 3.5l3 9 3-9 2.182 6"
    />
  );

export default SvgInstrumentDholak;
