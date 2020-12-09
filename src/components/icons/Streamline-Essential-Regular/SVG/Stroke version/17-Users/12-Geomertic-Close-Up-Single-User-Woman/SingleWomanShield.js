import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-shield_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-shield_svg__cls-1"
      d="M23.25 9.937A13.5 13.5 0 0112 23.25 13.5 13.5 0 01.75 9.937V2.25a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5z"
    />,
    <path
      className="single-woman-shield_svg__cls-1"
      d="M16.225 16.875a4.515 4.515 0 00-2.384-2.591L12 17.625l-1.841-3.341a4.515 4.515 0 00-2.384 2.591"
    />,
    <circle
      className="single-woman-shield_svg__cls-1"
      cx={12}
      cy={9.375}
      r={3}
    />,
    <path
      className="single-woman-shield_svg__cls-1"
      d="M9 9.375s0 3.75-2.25 3.75M15 9.375s0 3.75 2.25 3.75"
    />
  );

export default SvgSingleWomanShield;
