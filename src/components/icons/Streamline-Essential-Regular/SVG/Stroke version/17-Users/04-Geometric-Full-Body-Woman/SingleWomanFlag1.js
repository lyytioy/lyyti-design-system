import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanFlag1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-flag-1_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-flag-1_svg__cls-1"
      d="M.75.75v22.5M11.25 9.75H.75v-7.5h10.5L7.5 6l3.75 3.75z"
    />,
    <circle
      className="single-woman-flag-1_svg__cls-1"
      cx={18.75}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-flag-1_svg__cls-1"
      d="M21.534 9.216L18.75 12.75l-2.784-3.534a4.489 4.489 0 00-1.716 3.534v3h1.5l.75 7.5H21l.75-7.5h1.5v-3a4.489 4.489 0 00-1.716-3.534zM15.75 3.75s0 3-1.5 3M21.75 3.75s0 3 1.5 3"
    />
  );

export default SvgSingleWomanFlag1;
