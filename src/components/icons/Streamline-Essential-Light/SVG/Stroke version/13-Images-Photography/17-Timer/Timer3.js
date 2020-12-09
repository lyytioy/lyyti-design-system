import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimer3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".timer-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="timer-3_svg__a" d="M1 9.003l3 4.5 3.5-4" />,
    <path
      className="timer-3_svg__a"
      d="M4.006 13.5A9.7 9.7 0 0113.15 2.51a9.5 9.5 0 01.7 18.987"
    />,
    <path
      className="timer-3_svg__a"
      d="M11 7.511h3a2 2 0 110 4 2 2 0 010 4h-3"
    />
  );

export default SvgTimer3;
